"use client";
import Link from "next/link";
import { useCart } from "@/app/_providers/Cart";
import { useAuth } from "@/app/_providers/Auth";
import { Loader } from "@/app/_components/Loader";
import CheckoutForm from "@/app/_components/Checkout/CheckoutForm";
import OrderSummary from "@/app/_components/Checkout/OrderSummary";

export default function Checkout() {
  const { user, authStatus } = useAuth();
  const {
    cart, // normalized cart from provider
    cartIsEmpty, // computed from cart.items
    cartReady, // becomes true after localStorage hydration
    isCartUpdating, // drives the summary skeleton/spinner
    cartDetails, // optional; don't block on this
  } = useCart();

  // 1) Wait for provider to hydrate localStorage into context
  if (!cartReady) {
    return (
      <div className="checkout">
        <div className="checkout__container">
          <div className="flex justify-center w-full py-10">
            <Loader />
          </div>
        </div>
      </div>
    );
  }

  // 2) Decide emptiness from provider cart (not cartDetails)
  if (cartIsEmpty) {
    return (
      <div className="checkout">
        <div className="checkout__container">
          <div className="flex flex-col items-center justify-center my-24 oswald gap-8 mx-auto">
            <h2 className="text-3xl">Your Cart is Empty</h2>
            <Link href="/" className="button !w-36">
              START SHOPPING
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // 3) Render checkout; let OrderSummary handle its own loading via isCartUpdating
  return (
    <div className="checkout">
      <div className="checkout__container">
        <div className="checkout__section checkout__section--main">
          <CheckoutForm
            user={user}
            status={authStatus}
            // do NOT pass `cart` prop; CheckoutForm reads from provider internally
            // cartTotal / cartDetails are optional, not required to render
          />
        </div>

        <div className="checkout__section checkout__section--side">
          <OrderSummary isCartUpdating={isCartUpdating} />
          {/* If your OrderSummary needs numbers immediately, you can pass cartDetails?.totals,
              but don't block page rendering on it */}
        </div>
      </div>
    </div>
  );
}
