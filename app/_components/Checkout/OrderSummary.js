"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import OrderItems from "./OrderItems";
import { useCart } from "@/app/_providers/Cart";
import { Loader } from "@/app/_components/Loader";

const formatPrice = (price) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(
    Number.isFinite(Number(price)) ? Number(price) : 0
  );

export default function OrderSummary({
  discountCode,
  handleDiscountCodeChange,
  applyDiscount,
  orderItems,
  isCartUpdating: isCartUpdatingProp,
}) {
  const {
    cart,
    cartDetails,
    isCartUpdating: isCartUpdatingCtx,
    forceRecalculateCart,
    cartReady,
  } = useCart();

  const isCartUpdating =
    typeof isCartUpdatingProp === "boolean"
      ? isCartUpdatingProp
      : isCartUpdatingCtx;

  // Call recalc once on mount if we don't have details yet
  const recalcCalled = useRef(false);
  useEffect(() => {
    if (!recalcCalled.current && !cartDetails) {
      recalcCalled.current = true;
      forceRecalculateCart();
    }
  }, [cartDetails, forceRecalculateCart]);

  // Wait until the provider has hydrated localStorage
  if (!cartReady) {
    return (
      <div className="checkout__section--side-wrapper">
        <div className="flex justify-center py-6">
          <Loader />
        </div>
      </div>
    );
  }

  // Safe fallbacks if details are still loading
  const summary = cartDetails?.cart ?? {};
  const subTotal = Number(summary.subTotal ?? 0);
  const discount = Number(summary.discount ?? 0);
  const courierCharge = Number(summary.courierCharge ?? 0);
  const total = Number(summary.total ?? 0);

  return (
    <div
      className={`checkout__section--side-wrapper ${
        isCartUpdating ? "pointer-events-none opacity-30" : ""
      }`}
    >
      <div className="mb-1">
        <label className="font-normal text-xl oswald tracking-wider">
          <span>Order Summary:</span>
        </label>
      </div>

      {!cartDetails ? (
        <div className="flex justify-center py-6">
          <Loader />
        </div>
      ) : (
        <>
          <div className="checkout__section__order-total-summary">
            <div className="order-total-summary__item">
              <div className="order-total-summary__title order-total-summary__title--subtotal">
                <span>Subtotal</span>{" "}
                <BsFillQuestionCircleFill className="tooltip" />
              </div>
              <div className="order-total-summary__detail order-total-summary__detail--price">
                {formatPrice(subTotal)} Inc GST
              </div>
            </div>

            {discount > 0 ? (
              <div className="order-total-summary__item">
                <div className="order-total-summary__title">Discount</div>
                <div className="order-total-summary__detail order-total-summary__detail--price">
                  {formatPrice(discount)}
                </div>
              </div>
            ) : null}

            <div className="order-total-summary__item">
              <div className="order-total-summary__title">Courier Charge</div>
              <div className="order-total-summary__detail">
                {formatPrice(courierCharge)}
              </div>
            </div>

            <div className="order-total-summary__item border-t border-black pt-3 mt-3">
              <div className="order-total-summary__title">Total</div>
              <div className="order-total-summary__detail order-total-summary__detail--price">
                {formatPrice(total + courierCharge)}
              </div>
            </div>
          </div>

          <OrderItems
            orderItems={Array.isArray(cart?.items) ? cart.items : []}
            cartDetails={cartDetails}
          />
        </>
      )}

      <Link href="/cart">
        <div className="checkout__continue-shopping pt-8 pb-4 px-4 text-black uppercase text-sm font-semibold text-center">
          Edit Cart
        </div>
      </Link>
    </div>
  );
}
