"use client";
import React from "react";
import { ProductLinks } from "./Links";
import { MoreFeatures } from "./MoreFeatures";
import { YouMayAlsoLike } from "./YouMayAlsoLike";
import { CompatibleProducts } from "./CompatibleProducts";
import "@/app/_css/product/sidebar.css";
const Sidebar = ({ full, tabsData }) => {
    console.log(tabsData);
    return (
        <div
            id="js__product__sidebar"
            className={`${full ? "sidebar__full" : "sidebar"}`}
        >
            {tabsData.links ? <ProductLinks links={tabsData.links} /> : <></>}
            {tabsData.compatibleProducts &&
            tabsData.compatibleProducts.length > 0 ? (
                <CompatibleProducts products={tabsData.compatibleProducts} />
            ) : (
                <></>
            )}
            {tabsData.relatedProducts && tabsData.relatedProducts.length > 0 ? (
                <YouMayAlsoLike products={tabsData.relatedProducts} />
            ) : (
                <></>
            )}
            {tabsData.moreFeaturesProducts &&
            tabsData.moreFeaturesProducts.length > 0 ? (
                <MoreFeatures products={tabsData.moreFeaturesProducts} />
            ) : (
                <></>
            )}
        </div>
    );
};

export default Sidebar;
