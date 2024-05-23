"use client";
import React from "react";
import { Suspense } from "react";
import { Loading } from "@/app/_components/Product/Gallery/Loading";
import { Loader } from "@/app/_components/Loader";
import Tabs from "@/app/_components/Product/Tabs/Tabs";
import Sidebar from "@/app/_components/Product/Sidebar/Sidebar";
import BreadCrumb from "@/app/_components/Common/Breadcrumb";
import Gallery from "@/app/_components/Product/Gallery/Gallery";
import Info from "@/app/_components/Product/Info/Info";

export const ProductWrapper = async ({ data }) => {
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

    let productAllData = null;

    productAllData = await fetch(
        `${process.env.NEXT_PUBLIC_LIVE_URL}/api/product?id=${data.id}`
    );
    productAllData = await productAllData.json();
    const { overview, inTheBox, images } = productAllData;
    return (
        <div>
            <BreadCrumb breadCrumbs={breadCrumbs} />
            <div className="app__product">
                <Suspense fallback={<Loading />}>
                    <Gallery images={images} />
                </Suspense>

                <Info producData={data} />
            </div>
            <Suspense fallback={<Loader />}>
                <Tabs />
            </Suspense>
        </div>
    );
};
