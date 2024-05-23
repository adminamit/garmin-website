import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import "@/app/_css/shop/compare.css";
const Compare = () => {
    const searchParams = useSearchParams();
    const compareProduct = searchParams.get("compareProduct");
    return (
        <div data-v-3b697b18="" className="compare-banner">
            <div className="compare-banner__inner-wrap">
                <div className="compare-banner__autocomplete-wrapper"></div>
                <div className="compare-items">
                    <div className="compare-item compare-item--active">
                        <button className="compare-item__close" type="button">
                            {" "}
                            ×{" "}
                        </button>
                        <Image
                            className="compare-item__image"
                            src="https://res.garmin.com/en/products/010-02863-33/g/cf-sm.jpg"
                            alt="Forerunner® 165 Music"
                            width={47}
                            height={47}
                            quality={100}
                        />
                    </div>
                    <div className="compare-item"></div>
                    <div className="compare-item"></div>
                    <div className="compare-item"></div>
                    <div className="compare-item"></div>
                </div>
            </div>
            <div className="compare__button__host compare__button__host--large">
                <Link
                    className="compare-button"
                    href={`/compare/?compareProduct=${compareProduct}`}
                >
                    COMPARE
                </Link>
            </div>
        </div>
    );
};

export default Compare;
