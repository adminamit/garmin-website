import React from "react";

import "@/app/_css/product/product.css";
import notFound from "../../not-found";

import { ProductWrapper } from "../wrapper";
async function getProduct(id) {
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
        <ProductWrapper
            productData={productData}
            variationData={variationData}
            breadCrumbs={breadCrumbs}
        />
    );
};

export default page;
