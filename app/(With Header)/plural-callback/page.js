"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader } from "@/app/_components/Loader";
import toast from "react-hot-toast";
import { clearCart } from "@/app/_providers/Cart";
import { deleteCookie } from "cookies-next";

const clearOrder = () => deleteCookie("orderId");

const PluralCallbackPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("Processing your payment...");

  useEffect(() => {
    const handleCallback = async () => {
      const pluralOrderId = searchParams.get("plural_order_id");
      const orderId = searchParams.get("orderId");

      if (!pluralOrderId || !orderId) {
        toast.error("Missing payment details.");
        router.push("/checkout/error?message=missing_details");
        return;
      }

      try {
        const res = await fetch("/api/plural/verify-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ pluralOrderId, orderId }),
        });

        const data = await res.json();
        if (data.status === "SUCCESS") {
          setMessage("Payment verified. Updating order...");

          // Step 1: Update Order Status
          await fetch("/api/order/updateOrderStatus", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: data.client_transaction_id,
              razorpayPaymentId: data.payment_id,
              orderStatus: "processing",
              trackingId: null,
            }),
          });

          // Step 2: Cleanup and Redirect
          toast.success("Payment successful!");
          clearOrder();
          clearCart();
          router.push(`/account/orders/${data.client_transaction_id}`);
        } else {
          toast.error("Payment failed or pending.");
          router.push(
            `/checkout/failure?orderId=${orderId}&message=${data.message}`
          );
        }
      } catch (error) {
        console.error("Verification error:", error);
        toast.error("Verification failed.");
        router.push("/checkout/error?message=verification_error");
      } finally {
        setLoading(false);
      }
    };

    if (searchParams.get("plural_order_id") && searchParams.get("orderId")) {
      handleCallback();
    }
  }, [searchParams, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {loading ? <Loader /> : <h2 className="text-xl">{message}</h2>}
    </div>
  );
};

export default PluralCallbackPage;
