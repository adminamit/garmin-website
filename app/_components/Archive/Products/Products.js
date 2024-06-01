import React, { useState, useRef } from "react";
import TileBanner from "./TileBanner";
import { Product } from "./Product";
import Pagination from "../Pagination";
import { useSearchParams } from "next/navigation";
export const Products = ({
    compare,
    handleCompareProductsChange,
    compareProducts,
    handleCompareChange,
    categoryId,
    products,
}) => {
    // const searchParams = useSearchParams();
    // const series = searchParams.get("series");

    // let products = [];
    // const fetchProducts = await fetch(
    //     `${
    //         process.env.NEXT_PUBLIC_LIVE_URL
    //     }/api/products/?id=${categoryId}&draft=${false}&series=${series}`
    // );
    // products = await fetchProducts.json();
    return (
        <>
            <div className="product-grid">
                <div className="product-grid__products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 mt-8 flex-grow-0">
                    {products.docs.map((product) =>
                        product.banner ? (
                            <TileBanner banner={product} key={product.title} />
                        ) : (
                            <Product
                                product={product}
                                compare={compare}
                                key={product.id}
                                handleCompareProductsChange={
                                    handleCompareProductsChange
                                }
                                compareProducts={compareProducts}
                            />
                        )
                    )}
                </div>
            </div>
            <Pagination {...products} />
        </>
    );
};
