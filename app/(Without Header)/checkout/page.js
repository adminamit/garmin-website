"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import OrderSummary from "@/app/_components/Checkout/OrderSummary";
import CheckoutPrompt from "@/app/_components/Checkout/CheckoutPrompt";
import CheckoutForm from "@/app/_components/Checkout/CheckoutForm";
import { useCart } from "@/app/_providers/Cart";
import { Loader } from "@/app/_components/Loader";
import { useAuth } from "@/app/_providers/Auth";
// import { useRouter } from "next/navigation";
const Checkout = () => {
    const { user, isCartUpdating, authStatus } = useAuth();
    const {
        cart,
        cartIsEmpty,
        addItemToCart,
        cartDetails,
        hasInitializedCart,
    } = useCart();
    const router = useRouter();
    // if (!user) {
    //     router.push("/login");
    // }

    return (
        <div className="checkout">
            <div className="checkout__container">
                {cartDetails ? (
                    cartDetails.cart.items.length > 0 ? (
                        <>
                            <div className="checkout__section checkout__section--main">
                                {/* <CartItems items={cartItems} /> */}
                                {/* <CheckoutPrompt user={user} status={status} /> */}
                                <CheckoutForm
                                    user={user}
                                    status={status}
                                    cartDetails={cartDetails}
                                    cart={cart}
                                />
                            </div>
                            <div className="checkout__section checkout__section--side">
                                <OrderSummary isCartUpdating={isCartUpdating} />
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center my-24 oswald gap-8">
                            <h2 className="text-3xl">Your Cart is Empty</h2>
                            <Link href="/" className="button !w-36">
                                START SHOPPING
                            </Link>
                        </div>
                    )
                ) : (
                    <div className="flex justify-center w-full py-10">
                        <Loader />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Checkout;
