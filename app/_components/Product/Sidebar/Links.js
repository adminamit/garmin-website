import Image from "next/image";
import Link from "next/link";
import HtmlParser from "react-html-parser";
import "@/app/_css/product/links.css";
import { Heading } from "../Common/Heading";
import { Card } from "./Card";
export const ProductLinks = ({ links }) => {
    return (
        <section className="sidebar__container sidebar__container--cards sidebar__product-links">
            {/* <div className="sidebar__product-links"> */}
            {links.manual ? (
                <Link
                    href={links.manual}
                    className="sidebar__product-links__card"
                >
                    <div className="product-link__icon">
                        <Image
                            src="/assets/icons/manual.svg"
                            width="20"
                            height="20"
                            className="product-card__product-image"
                            unoptimized
                            alt={"Image Links"}
                        />
                    </div>
                    <div className="product-link__product-details flex-1 flex flex-col gap-2 justify-center">
                        <h2 className="product-link__title ">
                            <span className="product-link__title__text">
                                Manual
                            </span>
                            <Image
                                src="/assets/icons/title-arrow.svg"
                                width="8"
                                height="8"
                                className="product-link__title__icon"
                                unoptimized
                                alt={"Image Links"}
                            />
                        </h2>
                    </div>
                </Link>
            ) : (
                ""
            )}

            {links.software ? (
                <Link
                    href={links.software}
                    className="sidebar__product-links__card"
                >
                    <div className="product-link__icon">
                        <Image
                            src="/assets/icons/software.svg"
                            width="20"
                            height="20"
                            className="product-card__product-image"
                            unoptimized
                            alt={"Image Links"}
                        />
                    </div>
                    <div className="product-link__product-details flex-1 flex flex-col gap-2 justify-center w-full">
                        <h2 className="product-link__title ">
                            <span className="product-link__title__text">
                                software
                            </span>
                            <Image
                                src="/assets/icons/title-arrow.svg"
                                width="8"
                                height="8"
                                className="product-link__title__icon"
                                unoptimized
                                alt={"Image Links"}
                            />
                        </h2>
                    </div>
                </Link>
            ) : (
                ""
            )}

            {links.supportCenter ? (
                <Link
                    href={links.supportCenter}
                    className="sidebar__product-links__card"
                >
                    <div className="product-link__icon">
                        <Image
                            src="/assets/icons/support.svg"
                            width="20"
                            height="20"
                            className="product-card__product-image"
                            unoptimized
                            alt={"Image Links"}
                        />
                    </div>
                    <div className="product-link__product-details flex-1 flex flex-col gap-2 justify-center">
                        <h2 className="product-link__title ">
                            <span className="product-link__title__text">
                                support center
                            </span>
                            <Image
                                src="/assets/icons/title-arrow.svg"
                                width="8"
                                height="8"
                                className="product-link__title__icon"
                                unoptimized
                                alt={"Image Links"}
                            />
                        </h2>
                    </div>
                </Link>
            ) : (
                ""
            )}
            {/* </div> */}
        </section>
    );
};
