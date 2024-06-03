"use client";
import React, { useState, useEffect } from "react";
import { useCart } from "@/app/_providers/Cart";
import { Loader } from "../../Loader";
import toast from "react-hot-toast";
export const AddToCart = ({ product, quantity = 1, setAddedToCart }) => {
    const {
        cart,
        addItemToCart,
        isProductInCart,
        hasInitializedCart,
        isCartUpdating,
    } = useCart();
    const [addingToCart, setAddingToCart] = useState(false);

    // useEffect(() => {
    //     setIsInCart(isProductInCart(product));
    // }, [isProductInCart, product, cart]);
    const handleAddToCart = () => {
        setAddingToCart(true);
        setTimeout(() => {
            addItemToCart({
                product,
                quantity,
            });
            setAddingToCart(false);
            setAddedToCart(true);
        }, 1000);
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
                    handleAddToCart();
                }}
            >
                {addingToCart ? <Loader /> : "Add To Cart"}
            </button>
        </div>
    );
};
