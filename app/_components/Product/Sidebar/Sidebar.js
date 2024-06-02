"use client";
import React from "react";
import { ProductLinks } from "./Links";
import { MoreFeatures } from "./MoreFeatures";
import { YouMayAlsoLike } from "./YouMayAlsoLike";
import { CompatibleProducts } from "./CompatibleProducts";
import "@/app/_css/product/sidebar.css";
const Sidebar = ({ full, productData }) => {
    return (
        <div
            id="js__product__sidebar"
            className={`${full ? "sidebar__full" : "sidebar"}`}
        >
            {productData.links ? (
                <ProductLinks links={productData.links} />
            ) : (
                <></>
            )}
            {productData.compatibleProducts ? (
                <CompatibleProducts products={productData.compatibleProducts} />
            ) : (
                <></>
            )}
            {productData.relatedProducts ? (
                <YouMayAlsoLike products={productData.relatedProducts} />
            ) : (
                <></>
            )}
            {productData.moreFeaturesProducts ? (
                <MoreFeatures products={productData.moreFeaturesProducts} />
            ) : (
                <></>
            )}
        </div>
    );
};

export default Sidebar;
