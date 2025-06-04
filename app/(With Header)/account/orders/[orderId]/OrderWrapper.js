"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import dayjs from "dayjs";
import Link from "next/link";
import { Loader } from "@/app/_components/Loader";
import { deleteCookie } from "cookies-next";
import { useCart } from "@/app/_providers/Cart";

const formatPrice = (price) => {
  return price.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });
};

const OrderWrapper = ({ orderId }) => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const { clearCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    const verifyAndUpdate = async () => {
      const pluralOrderId = searchParams.get("order_id");
      const status = searchParams.get("status");
      const signature = searchParams.get("signature");
      const error_code = searchParams.get("error_code") || "";
      const error_message = searchParams.get("error_message") || "";

      if (pluralOrderId && signature) {
        const res = await fetch("/api/plural/verify-signature", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            order_id: pluralOrderId,
            status,
            signature,
            error_code,
            error_message,
          }),
        });

        const result = await res.json();

        if (res.ok && result.status === "VERIFIED" && status === "AUTHORIZED") {
          // Now update your backend order
          await fetch("/api/order/updateOrderStatus", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: orderId,
              orderStatus: "processing",
              razorpayPaymentId: pluralOrderId, // same field as Razorpay
            }),
          });

          clearCart();
          deleteCookie("orderId");
        } else {
          console.warn("Payment not verified or failed");
        }
      }

      await fetchOrder(); // fetch regardless
    };

    const fetchOrder = async () => {
      const res = await fetch(`/api/graphQl/order/?orderID=${orderId}`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const data = await res.json();
        setOrder(data);
      }
      setLoading(false);
    };

    verifyAndUpdate();
  }, [orderId]);

  if (loading || !order) return <Loader />;

  return (
    <section className="py-16 relative">
      <div className="w-full max-w-[1060px] px-4 md:px-5 lg-6 mx-auto">
        <h2 className="oswald font-semibold text-[2.5rem] text-primary text-center">
          Order Placed
        </h2>
        <p className="mt-4 font-normal text-lg text-center">
          Your order summary.
        </p>
        <div className="main-box border border-borderColor pt-6">
          <div className="flex flex-col lg:flex-row justify-between px-6 pb-6 border-b border-borderColor">
            <div>
              <h2 className="oswald mb-4 font-medium">Order ID: #{order.id}</h2>
              <p className="oswald text-base mt-4">
                Order Date :{" "}
                <span>{dayjs(order.createdAt).format("DD MMM YYYY")}</span>
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <span className="uppercase text-xs text-white bg-primary px-4 h-12 flex items-center rounded-md oswald">
                {order.orderStatus}
              </span>
              {order.trackingId && (
                <Link
                  href={`https://www.delhivery.com/tracking?awb=${order.trackingId}`}
                  target="_blank"
                  className="uppercase text-xs text-white bg-black px-4 h-12 rounded-md oswald"
                >
                  Track
                </Link>
              )}
            </div>
          </div>

          <div className="px-3 min-[400px]:px-6">
            {order.items.map((item) => (
              <div
                key={item.product.id}
                className="flex flex-col lg:flex-row items-center py-12 border-b border-borderColor gap-6"
              >
                <Image
                  src={item.product.featuredImageUrl}
                  alt={item.product.title}
                  width={140}
                  height={140}
                  className="aspect-square"
                  unoptimized
                />
                <div className="w-full">
                  <h2 className="oswald text-xl text-secondary">
                    {item.product.title}
                  </h2>
                  <p className="mt-2">Qty: {item.quantity}</p>
                  <p>Price: {formatPrice(item.price)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="py-5 mx-6">
            <p className="oswald text-base">
              Expected Delivery Time:{" "}
              <span className="text-primary">4–7 Working Days</span>
            </p>
          </div>

          <div className="border-t border-borderColor px-6 py-6 flex flex-col lg:flex-row justify-between">
            <Link
              href="mailto:help@garmin-india.com"
              className="text-red-500 oswald"
            >
              Cancel Order
            </Link>
            <div>
              {order.discount && (
                <p>
                  <strong>Discount:</strong> {formatPrice(order.discount)} (
                  {order.coupon?.name})
                </p>
              )}
              <p>
                <strong>Total:</strong> {formatPrice(order.total)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderWrapper;
