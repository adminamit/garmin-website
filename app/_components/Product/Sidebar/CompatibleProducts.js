import { useState } from "react";
import Image from "next/image";
import HtmlParser from "react-html-parser";
import "@/app/_css/product/more-features.css";
import { Heading } from "../Common/Heading";
import { Card } from "./Card";
export const CompatibleProducts = ({ products }) => {
    return (
        <section className="sidebar__container sidebar__container--cards">
            <Heading>compatible products</Heading>
            <div className="sidebar__list">
                {products.map((item) => (
                    <Card href={`/p/${item.sku}`} key={item.sku}>
                        <div className="product-card__product-url">
                            <Image
                                src={item.featuredImageUrl}
                                alt={item.title}
                                width="20"
                                height="20"
                                className="product-card__product-image"
                                unoptimized
                            />
                        </div>
                        <div className="product-card__product-details flex-1 ml-4 flex flex-col gap-2">
                            <h2 className="product-card__product-name">
                                {HtmlParser(item.title)}
                            </h2>

                            <div className="product-card__product-price">
                                ₹ {item.salePrice ? item.salePrice : item.price}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
};
