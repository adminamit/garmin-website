import React from "react";
import Link from "next/link";
import Image from "next/image";
import HtmlParser from "react-html-parser";
const Card = ({ product }) => {
    return (
        <div className="compare__card">
            <div className="card__header">
                <Link
                    className="card__header__image"
                    href="https://www.garmin.com/en-GB/p/1057989"
                >
                    <Image
                        className="card__header__image--main"
                        src={product.featuredImageUrl}
                        alt="vívoactive® 5"
                        width={0}
                        height={0}
                        unoptimized
                    />
                    <div className="card__header__image--sticky-title g__copy g__copy--left g__copy--light g__copy--primary">
                        {HtmlParser(product.title)}
                    </div>
                </Link>
                <div className="card__header--close">
                    <div className="card__header--close--icon">
                        <svg
                            className="g-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 100"
                        >
                            <path d="M74.3 80.6c-1.4 0-2.8-.5-3.9-1.6L48.8 57.4 27.2 79c-2.1 2.1-5.6 2.1-7.7 0s-2.1-5.6 0-7.7L41 49.7 19.4 28.1c-2.1-2.1-2.1-5.6 0-7.7 2.1-2.1 5.6-2.1 7.7 0L48.7 42l21.6-21.6c2.1-2.1 5.6-2.1 7.7 0 2.1 2.1 2.1 5.6 0 7.7L56.5 49.7l21.6 21.6c2.1 2.1 2.1 5.6 0 7.7-1 1.1-2.4 1.6-3.8 1.6z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="card__body">
                <div className="card__body__inner">
                    <div className="card__body--title g__copy g__copy--left g__copy--light g__copy--primary">
                        {HtmlParser(product.title)}
                    </div>
                    <div className="card__price">
                        <div
                            className="price g__price"
                            original-price="£259.99"
                        >
                            <div className="g__price__original-price">
                                ₹{product.price}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inline-flex ">
                    <Link
                        className="button inline bg-primary !border-none"
                        href="https://www.garmin.com/en-GB/p/1057989"
                    >
                        Shop
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Card;
