import React from "react";
import Link from "next/link";
import "@/app/_css/product/card.css";
export const Card = ({ href, children }) => {
    return (
        <Link href={href} className="product__card">
            <div className="product__card__inner">{children}</div>
        </Link>
    );
};
