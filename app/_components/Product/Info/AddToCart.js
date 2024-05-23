"use client";
import React, { useState, useEffect } from "react";
import { useCart } from "@/app/_providers/Cart";
export const AddToCart = ({ product, quantity = 1 }) => {
    const {
        cart,
        addItemToCart,
        isProductInCart,
        hasInitializedCart,
        isCartUpdating,
    } = useCart();
    const [isInCart, setIsInCart] = useState();

    useEffect(() => {
        setIsInCart(isProductInCart(product));
    }, [isProductInCart, product, cart]);

    const addToCart = () => {
        addItemToCart({
            product,
            quantity,
        });
    };

    return (
        <div id="js__product__ctas" className="app__product__cta">
            <button
                id="js__cta__buy"
                href=""
                className={`app__product__cta__button app__product__cta__button__buy ${
                    isCartUpdating ? "" : ""
                }`}
                onClick={() => {
                    addToCart();
                }}
            >
                Add To Cart
            </button>
        </div>
    );
};
