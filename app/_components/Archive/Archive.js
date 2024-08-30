"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useQueryState } from "nuqs";
import { Products } from "./Products/Products";
import { Blocks } from "../Blocks";
import Compare from "./Compare";
import { Heading } from "./Heading";
import Sidebar from "./sidebar";
import { Loading } from "./Loading";
import SortFilter from "./Filters/Sort";
import { useSearchParams } from "next/navigation";
import HtmlParser from "react-html-parser";

export const Archive = ({ category }) => {
    const searchParams = useSearchParams();
    const series = searchParams.get("series");
    const activity = searchParams.get("activity");
    const features = searchParams.get("features");
    const sortBy = searchParams.get("sortBy");
    const page = searchParams.get("page");
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [compareProductsData, setCompareProductsData] = useState([]);
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
    useEffect(() => {
        setLoading(true);
        const fetchProducts = async () => {
            const res = await fetch(
                `/api/graphQl/products/?id=${
                    category.id
                }&draft=${false}&series=${series}&activity=${activity}&features=${features}&sortBy=${sortBy}&page=${
                    page ? page : 1
                }`,
                { cache: "no-store" }
            );
            const data = await res.json();
            setLoading(false);
            setProducts(data);
        };

        fetchProducts();
    }, [series, activity, features, sortBy, page]);

    const handleCompareProductsChange = (product, action, image) => {
        const isMobile = window.innerWidth < 768;
        const allowedProductCout = isMobile ? 2 : 5;
        let currentProducts = compareProductsData ? compareProductsData : [];
        let activeCompareProducts = compareProducts
            ? compareProducts.split(",")
            : [];
        if (action === "REMOVE") {
            const updated = activeCompareProducts.filter(
                (item) => item !== product.sku
            );
            currentProducts = currentProducts.filter(
                (item) => item.sku !== product.sku
            );
            setCompareProducts(updated.toString(), {
                shallow: true,
                history: "push",
            });
            setCompareProductsData(currentProducts);
        } else if (action === "ADD") {
            currentProducts.push({
                sku: product.sku,
                title: product.title,
                image: product.featuredImageUrl,
            });
            activeCompareProducts.length < allowedProductCout
                ? activeCompareProducts.push(product.sku) &&
                  setCompareProducts(activeCompareProducts.toString()) &&
                  setCompareProductsData(currentProducts)
                : null;
        }
    };
    const handleCompareChange = (state) => {
        state
            ? setCompare("1")
            : setCompare(null) &&
              setCompareProducts(null) &&
              setCompareProductsData([]);
    };

    const {
        layoutTop,
        layoutBottom,
        title,
        heading,
        featuredImage,
        description,
    } = category;
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
            <div className="py-[2.5em] px-[1em] text-center max-w-[900px] mx-auto mt-2 mb-6">
                <Heading title={heading} />
                <p className="font-light text-base">
                    {HtmlParser(description)}
                </p>
            </div>

            <div className="flex flex-col lg:flex-row w-full border-t border-borderColor">
                <div className="sidebar lg:w-[315px] border-r border-borderColor lg:p-4">
                    {products ? <Sidebar products={products} /> : ""}
                </div>
                <div className="products-wrapper lg:w-[calc(100vw-315px)]">
                    <SortFilter
                        compare={compare}
                        handleCompareChange={handleCompareChange}
                    />

                    {!loading && products ? (
                        <Products
                            compare={compare}
                            handleCompareChange={handleCompareChange}
                            handleCompareProductsChange={
                                handleCompareProductsChange
                            }
                            compareProducts={compareProducts}
                            categoryId={category.id}
                            products={products}
                            sortBy={sortBy}
                        />
                    ) : (
                        <Loading />
                    )}
                </div>
            </div>

            <React.Fragment>
                <Blocks blocks={layoutBottom} />
            </React.Fragment>
            {compare ? (
                <Compare
                    compareProductsData={compareProductsData}
                    handleCompareProductsChange={handleCompareProductsChange}
                />
            ) : (
                ""
            )}
        </div>
    );
};
