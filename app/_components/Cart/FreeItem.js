import React from "react";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";
import { FaIndianRupeeSign } from "react-icons/fa6";
import Image from "next/image";
import { useCart } from "@/app/_providers/Cart";
const formatPrice = (price) => {
    return price.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
    });
};

const FreeItem = ({ item, quantity }) => {
    const { deleteItemFromCart, isProductInCart, addItemToCart } = useCart();

    return (
        <div className="cart__product-card">
            <div className="cart__product-card__product-url">
                <Link href={`/p/${item.sku}`}>
                    <Image
                        src={item.featuredImageUrl}
                        alt={item.title}
                        width="20"
                        height="20"
                        className="cart__product-card__product-image"
                        unoptimized
                    />
                </Link>
            </div>
            <div className="cart__product-card__product-details flex-1 ml-4 flex flex-col gap-2">
                <Link
                    href={`/p/${item.sku}`}
                    className="cart__product-card__product-url"
                >
                    <h2 className="cart__product-card__product-name">
                        {item.title}
                    </h2>
                </Link>
                <div className="cart__product-card__product-sku">
                    {item.sku}
                </div>

                <div className="">Quantity: {quantity}</div>

                <div className="flex gap-2 items-center">
                    <span className="product-card__price line-through">
                        {formatPrice(item.price)}
                    </span>
                    <span className="oswald font-bold">FREE</span>
                </div>

                {/* <div className="product-card__message product-card__legal-text">
                    {product.legalText}
                </div> */}
            </div>
        </div>
    );
};

export default FreeItem;
