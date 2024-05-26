import React, { useState, useRef } from "react";
import TileBanner from "./TileBanner";
import { Product } from "./Product";
import Pagination from "../Pagination";
export const Products = async ({
    compare,
    handleCompareProductsChange,
    compareProducts,
    handleCompareChange,
    categoryId,
}) => {
    let products = [];
    const fetchProducts = await fetch(
        `${
            process.env.NEXT_PUBLIC_LIVE_URL
        }/api/products/?id=${categoryId}&draft=${false}`
    );
    products = await fetchProducts.json();
    console.log("productsproductsproductsproducts");
    console.log(products);
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
