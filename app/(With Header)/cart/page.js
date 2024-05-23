"use client";
import React, { useState, useEffect } from "react";
import CartItems from "@/app/_components/Cart/CartItems";
import SubTotal from "@/app/_components/Cart/SubTotal";
import { useCart } from "@/app/_providers/Cart";
import { Loader } from "@/app/_components/Loader";
import Link from "next/link";
import toast from "react-hot-toast";
import { isEmpty } from "lodash";
const Cart = () => {
    const [couponCode, setCouponCode] = useState("");
    // const [cartItems, setCartItems] = useState(0);
    const {
        cart,
        cartIsEmpty,
        addItemToCart,
        cartDetails,
        hasInitializedCart,
        isCartUpdating,
        addCouponToCart,
        removeCouponFromCart,
    } = useCart();
    const handleCouponCodeChange = (e) => {
        setCouponCode(e.target.value);
    };

    const applyCouponCode = () => {
        if (isEmpty(couponCode) || couponCode.length < 5) {
            toast.error("Please enter a valid coupon code!");
            return;
        }
        addCouponToCart(couponCode);
        setCouponCode("");
    };

    const removeCouponCode = () => {
        removeCouponFromCart();
    };

    return (
        <div className="cart relative py-8">
            {cart && cartDetails ? (
                cartDetails.cart.items.length > 0 ? (
                    <>
                        <h2 className="cart__heading text-sm font-normal py-6 text-center">
                            CART
                        </h2>
                        <div className="cart__container">
                            <div
                                className={`cart__section cart__section--main `}
                            >
                                <CartItems
                                    items={cartDetails.cart.items}
                                    cartDetails={cartDetails}
                                />
                            </div>
                            <div className="cart__section cart__section--side">
                                <SubTotal
                                    couponCode={couponCode}
                                    handleCouponCodeChange={
                                        handleCouponCodeChange
                                    }
                                    applyCouponCode={applyCouponCode}
                                    removeCouponCode={removeCouponCode}
                                    cartDetails={cartDetails}
                                    cart={cart}
                                />
                            </div>
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
                <div className="flex justify-center align-middle items-center">
                    <Loader />
                </div>
            )}
            {isCartUpdating ? (
                <div className="absolute w-full h-full top-0 left-0 flex justify-center align-middle items-center bg-white bg-opacity-80">
                    <Loader />
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default Cart;
