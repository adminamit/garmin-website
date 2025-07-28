"use client";
import React, { useState, useEffect } from "react";
import Tabs from "@/app/_components/Product/Tabs/Tabs";
import Sidebar from "@/app/_components/Product/Sidebar/Sidebar";
import BreadCrumb from "@/app/_components/Common/Breadcrumb";
import Gallery from "@/app/_components/Product/Gallery/Gallery";
import Info from "@/app/_components/Product/Info/Info";
import { Loader } from "@/app/_components/Loader";
import Link from "next/link";
import HtmlParser from "react-html-parser";
export const dynamic = "force-dynamic";
export const revalidate = 0;
import { unstable_noStore as noStore } from "next/cache";

export const ProductWrapper = ({ productData, variationData, breadCrumbs }) => {
    noStore();
    const [addedToCart, setAddedToCart] = useState(false);
    const [tabsData, setTabsData] = useState(null);
    const handleAddedCart = () => {
        setAddedToCart(true);
    };

    useEffect(() => {
        const fetchTabsData = async () => {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_LIVE_URL}/api/graphQl/product/tabs?sku=${productData.sku}`,
                { cache: "no-store" }
            );
            const tabsData = await res.json();
            setTabsData(tabsData);
        };

        fetchTabsData();
    }, []);
    return (
        <>
            {addedToCart ? (
                <div className="app__product__interstitial__added">
                    <div className="app__product__interstitial__container">
                        <div className="app__product__interstitial__details">
                            <img
                                className="app__product__interstitial__image"
                                src={productData.featuredImage.url}
                                alt={productData.featuredImage.alt}
                            />
                            <div>
                                <div className="app__product__interstitial__details__title">
                                    <span className="app__product__interstitial__check-icon" />{" "}
                                    Added To Cart
                                </div>
                                <div className="app__product__interstitial__details__name">
                                    {productData.title ? HtmlParser(productData.title) : ""} -{" "}
                                    {productData.excerpt ? HtmlParser(productData.excerpt) : ""}
                                </div>
                            </div>
                        </div>
                        <div className="app__product__interstitial__buttons">
                            <button
                                id="app__product__interstitial__continue_shopping"
                                className="app__product__interstitial__continue_shopping g__button__host g__button__host--large"
                            >
                                <div
                                    className="g__button g__button--contained g__button--contained--large g__button--contained--light"
                                    onClick={() => setAddedToCart(false)}
                                >
                                    Continue Shopping
                                </div>
                            </button>
                            <button
                                id="app__product__interstitial__view_cart"
                                className="app__product__interstitial__view_cart g__button__host g__button__host--large"
                            >
                                <Link
                                    className="g__button g__button--contained g__button--contained--large g__button--contained--candy-blue"
                                    href="/cart/"
                                >
                                    View Cart
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
            <BreadCrumb breadCrumbs={breadCrumbs} />
            <div className="app__product">
                <Gallery gallery={productData.images} />
                <Info
                    productData={productData}
                    variationData={variationData}
                    setAddedToCart={setAddedToCart}
                    handleAddedCart={handleAddedCart}
                />
            </div>
            {tabsData ? <Tabs tabsData={tabsData} /> : <Loader />}
        </>
    );
};
