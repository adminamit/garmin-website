"use client";
import React, { useState, useEffect } from "react";
import NewsletterSignup from "@/app/_components/Newsletter";
import "@/app/_css/sale-promotions.css";
const SalesPromtotions = () => {
    const [promotions, setPromotions] = useState(null);

    useEffect(() => {
        const getPromotions = async () => {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_LIVE_URL}/api/promotions/`
            );
            const data = await res.json();
            setPromotions(data);
        };
        getPromotions();
    }, []);

    return (
        <div id="sales__promotions">
            <div className="container base base__medium">
                <div className="container container--constraint">
                    <h1 className="h1 light" style={{ textAlign: "center" }}>
                        <p>Deals and Promotions</p>
                    </h1>
                    <p className="p g__copy g__copy--center g__copy--light">
                        {/**/}
                        <div>
                            <p>
                                Find promotions, discounts and rebates on your
                                favorite Garmin products.
                            </p>
                            <p>
                                <em>
                                    Offers may not be combined with any other
                                    coupons, discounts, promotions or rebates.
                                </em>
                            </p>
                        </div>
                    </p>
                </div>
            </div>
            <div className="container light" locale="en-GB">
                <div className="container--constraint">
                    {/**/}
                    <div className="g__card-container g__card-container--light">
                        <div className="g__card-container g__card-container__constraint g__card-container__center">
                            {promotions && promotions.length > 0 ? (
                                promotions.map((promotion) => {
                                    let urlData = " ";
                                    if (promotion.link.type == "custom") {
                                        urlData = {
                                            url: promotion.link.url,
                                            label: promotion.link.label,
                                        };
                                    } else {
                                        const urlActive =
                                            promotion.link.reference
                                                .relationTo == "products"
                                                ? `/p/${promotion.link.reference.value.slug}`
                                                : `/c/${promotion.link.reference.value.slug}`;
                                        urlData = {
                                            url: urlActive,
                                            label: promotion.link.label,
                                        };
                                    }
                                    return (
                                        <div className="g__card g__card--light g__card--third g__card--has-cursor g__card__vertical">
                                            {/**/}
                                            <a
                                                className="g__card__link"
                                                href={urlData.url}
                                                target="_blank"
                                            >
                                                <button
                                                    className="g__card__button-overlay"
                                                    type="button"
                                                >
                                                    {promotion.title}
                                                </button>
                                            </a>
                                            <div className="g__card__wrapper">
                                                <a
                                                    className="g__card__link"
                                                    href={urlData.url}
                                                    target="_blank"
                                                >
                                                    <div className="image">
                                                        <img
                                                            className
                                                            src={
                                                                promotion
                                                                    .featuredImage
                                                                    .url
                                                            }
                                                            alt="THANK YOU, DAD"
                                                        />
                                                    </div>
                                                </a>
                                                <div className="g__card__content">
                                                    <a
                                                        className="g__card__link"
                                                        href={urlData.url}
                                                        target="_blank"
                                                    >
                                                        <div
                                                            className="heading g__heading g__heading--left g__heading--light"
                                                            text-align="left"
                                                            heading-size={2}
                                                            data-testid="g__heading"
                                                            theme="light"
                                                        >
                                                            <h2>
                                                                <p>
                                                                    {
                                                                        promotion.title
                                                                    }
                                                                </p>
                                                            </h2>
                                                        </div>
                                                        <p className="copy copy--no-disclaimer g__copy g__copy--left g__copy--light g__copy--primary">
                                                            {/**/}
                                                            <div className="copy__content">
                                                                <p>
                                                                    {
                                                                        promotion.description
                                                                    }
                                                                </p>
                                                            </div>
                                                        </p>
                                                        <div
                                                            className="g__flex"
                                                            style={{
                                                                display: "flex",
                                                                flexDirection:
                                                                    "row",
                                                                justifyContent:
                                                                    "flex-end",
                                                                marginTop:
                                                                    "auto",
                                                            }}
                                                        >
                                                            {/**/}
                                                            <button className="g__button__host g__button__host--medium">
                                                                {/**/}
                                                            </button>
                                                        </div>
                                                    </a>
                                                    <a
                                                        className="g__button g__button--flat g__button--flat--medium g__button--flat--primary no-hover"
                                                        href={urlData.url}
                                                        target="_self"
                                                        rel="noreferrer noopener"
                                                    >
                                                        Shop now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <div>No Deals at the moment</div>
                            )}
                        </div>
                    </div>
                </div>
                {/**/}
            </div>
            <NewsletterSignup />
        </div>
    );
};

export default SalesPromtotions;
