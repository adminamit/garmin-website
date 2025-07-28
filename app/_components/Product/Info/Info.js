"use client";
import React, { useState } from "react";

import "@/app/_css/product/info.css";
import HtmlParser from "react-html-parser";
import { AddToCart } from "./AddToCart";
import { Attributes } from "./Attributes";
import { ShippingInfo } from "./ShippingInfo";
import { FaHeart } from "react-icons/fa";
import { useAuth } from "@/app/_providers/Auth";
import toast from "react-hot-toast";
import { Loader } from "@/app/_components/Loader";
import { OutOfStock } from "./OutOfStock";
const formatPrice = (price) => {
    return price.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
    });
};

const Info = ({
    productData,
    variationData,
    setAddedToCart,
    handleAddedCart,
}) => {
    const { user, removeItemFromWishlist, isUpdating, addItemToWishlist } =
        useAuth();

    const [attributes, setAttributes] = useState([]);
    const removeItemHandler = async (id) => {
        const res = await removeItemFromWishlist(id);
        if (res.status === 200) {
            toast.success("Removed successfully!");
        } else {
            toast.error("Remove operation failed!");
        }
    };
    const addItemHandler = async (id) => {
        const res = await addItemToWishlist(id);
        if (res.status === 200) {
            toast.success("Added successfully!");
        } else {
            toast.error("Add operation failed!");
        }
    };

    const checkIfInWishlist = (id) => {
        let exist = false;
        if (user && user.wishlist) {
            user.wishlist.items.map((item) => {
                if (item.product.id == id) {
                    exist = true;
                }
            });
        }

        return exist;
    };
    return (
        <div id="js__product__info" className="app__product__info">
            <div id="js__product__meta">
                <div
                    id="js__product__info__name"
                    className="app__product__info__title g__heading g__heading--left g__heading--light"
                >
                    <h1>{productData.title ? HtmlParser(productData.title) : ""}</h1>
                </div>
                <p
                    id="js__product__info__variation"
                    className="app__product__info__subtitle"
                >
                    {productData.excerpt ? HtmlParser(productData.excerpt) : ""}
                </p>
                <p
                    id="js__product__info__part-number"
                    className="app__product__info__part-number"
                >
                    <span id="js__product__info__part-number__label">
                        PART NUMBER
                    </span>
                    <span
                        id="js__product__info__part-number__text"
                        className="app__product__info__part-number--light"
                    >
                        {productData.sku}
                    </span>
                </p>
            </div>

            <div className="app__product__price__wrapper js__product__price">
                <div
                    className="app__product__price__formatted app__product__price__wrapper__main"
                    id="js__product__price__main"
                >
                    {/* <span className="currency-sign">₹</span> */}
                    {/* <span className="amount">
                        {productData.salePrice
                            ? formatPrice(productData.salePrice)
                            : formatPrice(productData.price)}
                    </span> */}

                    {productData.salePrice ? (
                        <div className="amount text-2xl">
                            <span className="line-through opacity-50">
                                {formatPrice(productData.price)}
                            </span>

                            <span className="ml-3">
                                {formatPrice(productData.salePrice)}
                            </span>
                        </div>
                    ) : (
                        <span className="">
                            {formatPrice(productData.price)}
                        </span>
                    )}
                </div>
            </div>

            <Attributes
                productData={productData}
                variationData={variationData}
            />

            <div className="flex-gap gap-4 items-center relative">
                {productData.stock > 0 ? (
                    <AddToCart
                        product={productData}
                        setAddedToCart={setAddedToCart}
                    />
                ) : (
                    <OutOfStock productId={productData.id} />
                )}

                {/* {user ? (
                    !isUpdating ? (
                        !checkIfInWishlist(productData.id) ? (
                            <div
                                className="justify-center lg:justify-normal flex items-center oswald gap-1 text-primary cursor-pointer mb-4 text-base"
                                onClick={() => addItemHandler(productData.id)}
                            >
                                <FaHeart className="text-base" />
                                <span>Add to wishlist</span>
                            </div>
                        ) : (
                            <div
                                className="justify-center lg:justify-normal flex items-center oswald gap-1 text-red-500 cursor-pointer mb-4 text-base"
                                onClick={() =>
                                    removeItemHandler(productData.id)
                                }
                            >
                                <FaHeart className="text-base" />
                                <span>Remove from wishlist</span>
                            </div>
                        )
                    ) : (
                        <div className="w-40 mb-6">
                            <Loader />
                        </div>
                    )
                ) : (
                    ""
                )} */}
            </div>
            {productData.stock > 0 ? <ShippingInfo /> : <></>}
            {productData.note ? (
                <span className="app__product__note text-sm pt-1">
                    NOTE: {productData.note ? HtmlParser(productData.note) : ""}
                </span>
            ) : (
                <></>
            )}
        </div>
    );
};

export default Info;
