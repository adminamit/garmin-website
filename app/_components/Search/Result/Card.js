import React from "react";
import Link from "next/link";
import Image from "next/image";
import HtmlParser from "react-html-parser";
export const SearchResultCard = ({ product }) => {
    return (
        <Link href={`/p/${product.sku}`} className="card">
            <div>
                <Image
                    src={product.featuredImageUrl}
                    className="card__image"
                    alt={product.featuredImage.alt}
                    width={80}
                    height={80}
                    quality={100}
                    unoptimized
                />
                <h2 className="card__name">
                    <p>{HtmlParser(product.title)}</p>
                </h2>
                <span className="card__description">
                    <p>{HtmlParser(product.description)}</p>
                </span>
            </div>
        </Link>
    );
};
