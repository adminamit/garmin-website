import React from "react";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";
import HtmlParser from "react-html-parser";
import Image from "next/image";
import { useCart } from "@/app/_providers/Cart";
const formatPrice = (price) => {
    return price.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
    });
};

const CartItem = ({ item }) => {
    const product = item.product;
    const { deleteItemFromCart, isProductInCart, addItemToCart } = useCart();

    return (
        <div className="cart__product-card">
            <div className="cart__product-card__product-url cart__product-card__product-image">
                <Link href={`/p/${product.sku}`}>
                    <Image
                        src={product.featuredImageUrl}
                        alt={product.title}
                        width="20"
                        height="20"
                        className="cart__product-card__product-image"
                        unoptimized
                    />
                </Link>
            </div>
            <div className="cart__product-card__product-details flex-1 ml-4 flex flex-col gap-2">
                <Link
                    href={`/p/${product.sku}`}
                    className="cart__product-card__product-url"
                >
                    <h2 className="cart__product-card__product-name">
                        {HtmlParser(product.title)}
                    </h2>
                </Link>
                <div className="cart__product-card__product-sku">
                    {product.sku}
                </div>

                {product.salePrice ? (
                    <div className="product-card__price">
                        <span className="line-through opacity-50">
                            {formatPrice(product.price)}
                        </span>

                        <span className="ml-3">
                            {formatPrice(product.salePrice)}
                        </span>
                    </div>
                ) : (
                    <span className="product-card__price">
                        {formatPrice(product.price)}
                    </span>
                )}

                <select
                    className="product-card__quantity"
                    onChange={(e) => {
                        addItemToCart({
                            product,
                            quantity: Number(e.target.value),
                        });
                    }}
                    defaultValue={item.quantity}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
                <p className="product-card__message">
                    {product.processingTime}
                </p>
                {/* <div className="product-card__message product-card__legal-text">
                    {product.legalText}
                </div> */}
            </div>
            <button
                className="text-black absolute right-4 top-4 font-medium"
                onClick={() => {
                    deleteItemFromCart(product);
                }}
            >
                <MdOutlineClose className="fill-black" />
            </button>
        </div>
    );
};

export default CartItem;
