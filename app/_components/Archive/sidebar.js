"use client";
import React, { useState } from "react";
import SeriesFilter from "./Filters/Series";
import FeatureFilter from "./Filters/Feature";
import ActivityFilter from "./Filters/Activity";
import { HiOutlineSelector } from "react-icons/hi";
import { useQueryState } from "nuqs";
import "./sidebar.css";

const Sidebar = ({ products }) => {
    const [active, setActive] = useState(false);
    const [sortBy, setSortBy] = useQueryState("sortBy");
    let allActivity = [],
        allFeatures = [],
        allSeries = [];

    //PREPARE ACTIVITY
    products.docs.map((product) => {
        product.activity.map((item) => {
            allActivity.push({ id: item.id, name: item.title });
        });
    });

    //PREPARE FEATURES
    products.docs.map((product) => {
        product.features.map((item) => {
            allFeatures.push({ id: item.id, name: item.title });
        });
    });

    //PREPARE SERIES
    products.docs.map((product) => {
        product.series
            ? allSeries.push({
                  id: product.series.id,
                  name: product.series.title,
              })
            : "";
    });

    //GET Unique Activity
    allActivity = [
        ...new Map(allActivity.map((item) => [item["name"], item])).values(),
    ];
    allFeatures = [
        ...new Map(allFeatures.map((item) => [item["name"], item])).values(),
    ];
    allSeries = [
        ...new Map(allSeries.map((item) => [item["name"], item])).values(),
    ];

    return (
        <>
            <div
                className={`product__filters__wrapper ${
                    active ? "active" : ""
                }`}
            >
                <div className="product-filter filter-wrapper">
                    <div
                        className="product-filter__dropdown"
                        onClick={() => setActive(active ? false : true)}
                    >
                        <span className="product-filter__dropdown__text">
                            FILTER AND SORT
                        </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 10 16"
                            tabIndex={0}
                            className="product-filter__dropdown__arrow"
                        >
                            <path d="M5.7 8L0 13.8 2.1 16 10 8 2.1 0 0 2.2 5.7 8z" />
                        </svg>
                    </div>
                </div>
                <div className="product-filters">
                    <div className="relative flex flex-col lg:hidden items-start mb-4 ">
                        <span className="text-sm font-bold w-[100px]">
                            Sort By
                        </span>
                        <select
                            onChange={(e) => {
                                setSortBy(e.target.value);
                            }}
                            defaultValue={sortBy}
                            className=""
                        >
                            <option value="title">A to Z</option>
                            <option value="-title">Z to A</option>
                            <option value="price">Price: Low to High</option>
                            <option value="-price">Price: High to Low</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <HiOutlineSelector className="fill-current h-4 w-4" />
                        </div>
                    </div>
                    {allSeries ? <SeriesFilter allSeries={allSeries} /> : <></>}
                    {allFeatures ? (
                        <FeatureFilter allFeatures={allFeatures} />
                    ) : (
                        <></>
                    )}
                    {allActivity ? (
                        <ActivityFilter allActivity={allActivity} />
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </>
    );
};

export default Sidebar;
