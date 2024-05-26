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
import { useSearchParams } from "next/navigation";
export const Archive = async ({ category }) => {
    const searchParams = useSearchParams();
    const series = searchParams.get("series");
    const activity = searchParams.get("activity");
    const features = searchParams.get("features");
    const sortBy = searchParams.get("sortBy");

    // const [compareProducts, setCompareProducts] = useState([]);
    const [compare, setCompare] = useQueryState("compare", {
        shallow: true,
        history: "push",
    });
    const [compareProducts, setCompareProducts] = useQueryState(
        "compareProduct",
        {
            shallow: true,
            history: "push",
        }
    );

    let products = [];
    const fetchProducts = await fetch(
        `${process.env.NEXT_PUBLIC_LIVE_URL}/api/products/?id=${
            category.id
        }&draft=${false}&series=${series}&activity=${activity}&features=${features}&sortBy=${sortBy}`
    );
    products = await fetchProducts.json();

    const handleCompareProductsChange = (id, action) => {
        let activeCompareProducts = compareProducts
            ? compareProducts.split(",")
            : [];
        if (action === "REMOVE") {
            const updated = activeCompareProducts.filter((item) => item !== id);
            setCompareProducts(updated.toString(), {
                shallow: true,
                history: "push",
            });
        } else if (action === "ADD") {
            activeCompareProducts.length < 5
                ? activeCompareProducts.push(id) &&
                  setCompareProducts(activeCompareProducts.toString())
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
                    <Sidebar products={products} />
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
                            products={products}
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
