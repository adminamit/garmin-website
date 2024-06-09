import React from "react";
import Image from "next/image";
import HtmlParser from "react-html-parser";
const OrderItems = ({ orderItems, cartDetails }) => {
    return (
        <div className="flex flex-col bg-white">
            {orderItems.map((item) => (
                <div className="checkout__product-card" key={item.name}>
                    <div className="checkout__product-card__product-url">
                        <Image
                            src={item.product.featuredImageUrl}
                            alt={item.product.title}
                            width="20"
                            height="20"
                            className="checkout__product-card__product-image"
                            quality={100}
                            unoptimized
                        />
                    </div>
                    <div className="checkout__product-card__product-details flex-1 ml-4 flex flex-col gap-2">
                        <h2 className="checkout__product-card__product-name">
                            {HtmlParser(item.product.title)}
                        </h2>

                        <div className="checkout__product-card__product-sku">
                            {item.product.sku}
                        </div>
                        <div className="checkout__product-card__product-quantity">
                            Quantity: {item.quantity}
                        </div>
                    </div>
                </div>
            ))}
            {/* {JSON.stringify(cartDetails.freeProduct)} */}
            {cartDetails.freeProduct &&
            Object.keys(cartDetails.freeProduct).length != 0 ? (
                <div className="">
                    <h4 className="oswald my-4 mx-6 text-xl">
                        Your free gifts
                    </h4>

                    <div className="checkout__product-card">
                        <div className="checkout__product-card__product-url">
                            <Image
                                src={
                                    cartDetails.freeProduct.freeEligibleProduct
                                        .featuredImageUrl
                                }
                                alt={
                                    cartDetails.freeProduct.freeEligibleProduct
                                        .featuredImage.alt
                                }
                                width="20"
                                height="20"
                                className="checkout__product-card__product-image"
                                quality={100}
                                unoptimized
                            />
                        </div>
                        <div className="checkout__product-card__product-details flex-1 ml-4 flex flex-col gap-2">
                            <h2 className="checkout__product-card__product-name">
                                {
                                    cartDetails.freeProduct.freeEligibleProduct
                                        .title
                                }
                            </h2>

                            <div className="checkout__product-card__product-sku">
                                {
                                    cartDetails.freeProduct.freeEligibleProduct
                                        .sku
                                }
                            </div>
                            <div className="checkout__product-card__product-quantity">
                                Quantity:{" "}
                                {
                                    cartDetails.freeProduct
                                        .freeEligibleProductQuantity
                                }
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default OrderItems;
