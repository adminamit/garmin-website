"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Suspense } from "react";
import { useQueryState } from "nuqs";
import { Products } from "./Products/Products";
import { Blocks } from "../Blocks";
import Compare from "./Compare";
import { Heading } from "./Heading";
import Sidebar from "./sidebar";
import { Loading } from "./Loading";
import SortFilter from "./Filters/Sort";
import Series from "./Series";
export const Archive = ({ products, category }) => {
    const [compareProducts, setCompareProducts] = useState([]);
    const [compare, setCompare] = useQueryState("compare");
    const [compareProductParam, setCompareProductParam] =
        useQueryState("compareProduct");

    const handleCompareProductsChange = (id, action) => {
        let activeCompareProducts = compareProductParam
            ? compareProductParam.split(",")
            : [];
        if (action === "REMOVE") {
            const updated = activeCompareProducts.filter((item) => item !== id);
            setCompareProductParam(updated.toString());
        } else if (action === "ADD") {
            activeCompareProducts.length < 5
                ? activeCompareProducts.push(id) &&
                  setCompareProductParam(activeCompareProducts.toString())
                : null;
        }
    };
    const handleCompareChange = (state) => {
        state ? setCompare("1") : setCompare(null);
    };

    const { layoutTop, layoutBottom, title, heading, featuredImage } = category;
    return (
        <div className="w-full">
            {featuredImage ? (
                <Image
                    src={featuredImage.url}
                    width={0}
                    height={0}
                    className="w-full h-[300px"
                    unoptimized
                    alt={featuredImage.alt}
                />
            ) : (
                " "
            )}
            <React.Fragment>
                <Blocks blocks={layoutTop} />
            </React.Fragment>
            <Heading title={heading} />

            <div className="flex w-full border-t border-borderColor">
                <div className="sidebar w-[315px] border-r border-borderColor p-4">
                    <Sidebar />
                </div>
                <div className="products-wrapper w-[calc(100vw-315px)]">
                    <SortFilter
                        compare={compare}
                        handleCompareChange={handleCompareChange}
                    />
                    <Suspense fallback={<Loading />}>
                        <Products
                            compare={compare}
                            handleCompareChange={handleCompareChange}
                            handleCompareProductsChange={
                                handleCompareProductsChange
                            }
                            compareProducts={compareProducts}
                            categoryId={category.id}
                        />
                    </Suspense>
                </div>
            </div>

            <React.Fragment>
                <Blocks blocks={layoutBottom} />
            </React.Fragment>
            {compare ? <Compare /> : ""}
        </div>
    );
};
