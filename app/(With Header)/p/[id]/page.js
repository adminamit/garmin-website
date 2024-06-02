import React from "react";
import Tabs from "@/app/_components/Product/Tabs/Tabs";
import Sidebar from "@/app/_components/Product/Sidebar/Sidebar";
import BreadCrumb from "@/app/_components/Common/Breadcrumb";
import Gallery from "@/app/_components/Product/Gallery/Gallery";
import Info from "@/app/_components/Product/Info/Info";
import "@/app/_css/product/product.css";
import notFound from "../../not-found";
import { Loader } from "@/app/_components/Loader";

async function getProduct(id) {
    console.log(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/products/data/${id}`
    );
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/products/data/${id}`
    );
    return res.json();
}

async function getProductData(id) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/products/data/${id}`
    );
    return res.json();
}

const page = async ({ params: { id } }) => {
    let productData = null,
        variationData = null;
    const fetchProduct = await getProduct(id);
    productData = fetchProduct.product;
    variationData = fetchProduct.variations;

    if (!productData) {
        return notFound();
    }

    const breadCrumbs = [
        {
            label: "Sports & Fitness",
            link: "#",
        },
        {
            label: " Fitness Tracking",
            link: "#",
        },
    ];
    return (
        <div>
            <div className="app__product__interstitial__added">
                <div className="app__product__interstitial__container">
                    <div className="app__product__interstitial__details">
                        <img
                            className="app__product__interstitial__image"
                            src="https://res.garmin.com/en/products/010-02784-01/v/cf-lg.jpg"
                            alt="Venu® 3"
                        />
                        <div>
                            <div className="app__product__interstitial__details__title">
                                <span className="app__product__interstitial__check-icon" />{" "}
                                Added To Cart
                            </div>
                            <div className="app__product__interstitial__details__name">
                                Venu<sup className="registered-symbol">®</sup> 3
                                - Slate stainless steel bezel with black case
                                and silicone band
                            </div>
                        </div>
                    </div>
                    <div className="app__product__interstitial__buttons">
                        <button
                            id="app__product__interstitial__continue_shopping"
                            className="app__product__interstitial__continue_shopping g__button__host g__button__host--large"
                        >
                            <a
                                className="g__button g__button--contained g__button--contained--large g__button--contained--light"
                                href="#"
                            >
                                Continue Shopping
                            </a>
                        </button>
                        <button
                            id="app__product__interstitial__view_cart"
                            className="app__product__interstitial__view_cart g__button__host g__button__host--large"
                        >
                            <a
                                className="g__button g__button--contained g__button--contained--large g__button--contained--candy-blue"
                                data-testid="g__button"
                                href="https://buy.garmin.com/en-GB/cart/"
                            >
                                View Cart
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <BreadCrumb breadCrumbs={breadCrumbs} />
            <div className="app__product">
                <Gallery gallery={productData.images} />
                <Info productData={productData} variationData={variationData} />
            </div>
            {productData ? <Tabs productData={productData} /> : <Loader />}
        </div>
    );
};

export default page;
