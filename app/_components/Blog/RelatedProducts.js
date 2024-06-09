import React from "react";
import Link from "next/link";
import Image from "next/image";
import HtmlParser from "react-html-parser";
const RelatedProducts = ({ products }) => {
    return (
        <ul className="related-products-widget">
            {products.map((product) => {
                return (
                    <li key={product.id}>
                        <Link href={`/p/${product.sku}`}>
                            <Image
                                src={product.featuredImageUrl}
                                alt={product.title}
                                height={200}
                                width={220}
                                // unoptimized
                                quality={100}
                            />
                            <div className="related-products-widget__name">
                                {HtmlParser(product.title)}
                            </div>
                            <div className="related-products-widget__description">
                                {HtmlParser(product.description)}
                            </div>
                            <div className="related-products-widget__cta">
                                Shop Now{" "}
                            </div>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default RelatedProducts;
