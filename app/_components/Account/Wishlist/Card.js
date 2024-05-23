import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";
import HtmlParser from "react-html-parser";
import toast from "react-hot-toast";
const WishlishtCard = ({ item, removeItemFromWishlist }) => {
    const removeItemHandler = async (id) => {
        const res = await removeItemFromWishlist(id);
        if (res.status === 200) {
            toast.success("Removed successfully!");
        } else {
            toast.error("Remove operation failed!");
        }
    };
    return (
        <div className="card">
            <div>
                <Image
                    src={item.product.featuredImageUrl}
                    className="card__image"
                    alt={item.product.featuredImage.alt}
                    width={80}
                    height={80}
                    quality={100}
                />
                <h2 className="card__name">
                    <p>{HtmlParser(item.product.title)}</p>
                </h2>
                <div className="card__description">
                    <Link
                        href={`/p/${item.product.sku}`}
                        className="button button--center"
                    >
                        View
                    </Link>
                </div>
            </div>
            <IoCloseOutline
                className="remove"
                onClick={() => {
                    removeItemHandler(item.product.id);
                }}
            />
        </div>
    );
};

export default WishlishtCard;
