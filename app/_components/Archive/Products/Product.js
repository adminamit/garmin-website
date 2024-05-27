import React from "react";
import Link from "next/link";
import Image from "next/image";
import HtmlParser from "react-html-parser";
import { useQueryState } from "nuqs";
export const Product = ({
    compare,
    product,
    compareProducts,
    handleCompareProductsChange,
}) => {
    const [compareProductParam, setCompareProductParam] =
        useQueryState("compareProduct");
    return (
        <div key={product.name} className="group product-card-container">
            <Link href={`/p/${product.sku}`} className="product-card">
                {product.new ? (
                    <div className="kicker-wrapper">
                        <div className="blue kicker irregular">New</div>
                    </div>
                ) : (
                    ""
                )}
                <div className="product-card__wrapper">
                    <div className="product-card__image-container ">
                        <Image
                            alt="default alt"
                            src={product.featuredImageUrl}
                            width="160"
                            height="160"
                            className="w-full h-full object-center object-contain"
                        />
                    </div>

                    <div className="product-card__description">
                        <h2 className="product-card__title">
                            {HtmlParser(product.title)}
                        </h2>
                        <p className="product-card__description__copy">
                            {HtmlParser(product.description)}
                        </p>
                        <p className="pricing-wrapper">
                            {product.type == "simple" ? (
                                ""
                            ) : (
                                <span className="text-sm font-light">
                                    from{"  "}
                                </span>
                            )}
                            <span className="">₹{product.price}</span>
                        </p>
                    </div>
                </div>
            </Link>
            {compare ? (
                compareProductParam &&
                compareProductParam.split(",").includes(product.sku) ? (
                    <button
                        className="product-card-compare product-card-compare--active"
                        aria-label="Add to comparison"
                        onClick={() =>
                            handleCompareProductsChange(product.sku, "REMOVE")
                        }
                    >
                        <span className="compare-icon compare-icon--remove">
                            x
                        </span>
                    </button>
                ) : (
                    <button
                        className="product-card-compare "
                        aria-label="Add to comparison"
                        onClick={() =>
                            handleCompareProductsChange(product.sku, "ADD")
                        }
                    >
                        <span className="compare-icon compare-icon--add">
                            {" "}
                            +{" "}
                        </span>
                    </button>
                )
            ) : (
                ""
            )}
        </div>
    );
};
