// app/checkout/plural-callback/page.js
"use client"; // This component needs to be a Client Component to use `useSearchParams` and `useRouter`

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader } from "@/app/_components/Loader"; // Assuming you have a Loader component
import toast from "react-hot-toast"; // For displaying notifications

const PluralCallbackPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("Processing your payment...");

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        router.push("/");
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [loading, router]);

  useEffect(() => {
    const handlePluralCallback = async () => {
      setLoading(true);
      setMessage("Verifying payment status...");

      // Extract query parameters from Plural
      const pluralOrderId = searchParams.get("plural_order_id");
      const status = searchParams.get("status");
      const orderId = searchParams.get("orderId");

      console.log("Plural Callback Params:", {
        pluralOrderId,
        status,
        orderId,
      });

      if (!pluralOrderId || !clientTransactionId) {
        setMessage(
          "Missing essential payment details. Please contact support."
        );
        toast.error("Payment verification failed: Missing details.");
        setLoading(false);
        // Optionally redirect to a generic error page
        router.push(`/checkout/error?message=missing_details`);
        return;
      }

      try {
        // --- STEP 1: Verify Payment Status via your backend API ---
        // This is a crucial server-side verification step.
        // Create a new API route: /api/plural/verify-payment
        const verificationResponse = await fetch("/api/plural/verify-payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pluralOrderId: pluralOrderId,
            orderId: clientTransactionId, // Your internal order ID
          }),
        });

        if (!verificationResponse.ok) {
          const errorData = await verificationResponse.json();
          throw new Error(
            errorData.message || "Failed to verify payment with Plural."
          );
        }

        const verificationResult = await verificationResponse.json();
        console.log("Payment verification result:", verificationResult);

        if (verificationResult.status === "SUCCESS") {
          setMessage(
            "Payment successful! Redirecting to order confirmation..."
          );
          toast.success("Payment successful!");
          // --- STEP 2: Update internal order status (if not done by webhook) ---
          // You might update your order status in your backend here
          // or rely solely on Plural's webhooks for final status updates.
          // For now, let's assume the verification route handles some initial update.

          // Redirect to your order confirmation page
          router.push(`/checkout/success?orderId=${clientTransactionId}`);
        } else if (verificationResult.status === "PENDING") {
          setMessage(
            "Payment is pending. Please check your order status shortly."
          );
          toast("Payment is pending. We will notify you when it's confirmed.");
          router.push(`/checkout/pending?orderId=${clientTransactionId}`);
        } else {
          setMessage("Payment failed or was cancelled. Please try again.");
          toast.error(
            "Payment failed: " + verificationResult.message || "Unknown error."
          );
          // Redirect to your payment failure page
          router.push(
            `/checkout/failure?orderId=${clientTransactionId}&message=${encodeURIComponent(
              verificationResult.message || "Payment failed"
            )}`
          );
        }
      } catch (error) {
        console.error("Error during payment verification:", error);
        setMessage(
          "An error occurred during payment verification. Please contact support."
        );
        toast.error(error.message || "Payment verification failed.");
        setLoading(false);
        router.push(
          `/checkout/error?message=${encodeURIComponent(
            error.message || "verification_error"
          )}`
        );
      } finally {
        setLoading(false);
      }
    };

    // Only run the callback handling if search params are available
    if (searchParams.get("plural_order_id") && searchParams.get("status")) {
      handlePluralCallback();
    } else {
      // If no search params, maybe user navigated here directly, or it's a render before params are ready
      setMessage("Waiting for payment callback details...");
      setLoading(false); // Can be false if we expect params
    }
  }, [searchParams, router]); // Re-run effect if searchParams or router changes

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {loading ? (
        <Loader />
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">{message}</h2>
          {!loading && (
            <p className="text-gray-600">
              You will be redirected shortly. If not, please click{" "}
              <button
                onClick={() => router.push("/")}
                className="text-blue-500 hover:underline"
              >
                here
              </button>{" "}
              to go to the homepage.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default PluralCallbackPage;
