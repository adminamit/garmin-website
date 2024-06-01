import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import "@/app/_css/shop/compare.css";
const Compare = ({ compareProductsData, handleCompareProductsChange }) => {
    const searchParams = useSearchParams();
    const compareProduct = searchParams.get("compareProduct");
    return (
        <div data-v-3b697b18="" className="compare-banner">
            <div className="compare-banner__inner-wrap">
                <div className="compare-banner__autocomplete-wrapper"></div>
                <div className="compare-items">
                    {compareProductsData.map((product) => {
                        return (
                            <div className="compare-item compare-item--active">
                                <button
                                    className="compare-item__close"
                                    type="button"
                                    onClick={() =>
                                        handleCompareProductsChange(
                                            product,
                                            "REMOVE"
                                        )
                                    }
                                >
                                    {" "}
                                    ×{" "}
                                </button>
                                <Image
                                    className="compare-item__image"
                                    src={product.image}
                                    alt={product.title}
                                    width={47}
                                    height={47}
                                    quality={100}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="compare__button__host compare__button__host--large">
                <Link
                    className="compare-button"
                    href={
                        true
                            ? `/compare/?compareProduct=${compareProduct}`
                            : "/"
                    }
                >
                    COMPARE
                </Link>
            </div>
        </div>
    );
};

export default Compare;
