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
