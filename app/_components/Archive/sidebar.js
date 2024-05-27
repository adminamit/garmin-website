"use client";
import React, { useState } from "react";
import SeriesFilter from "./Filters/Series";
import FeatureFilter from "./Filters/Feature";
import ActivityFilter from "./Filters/Activity";

const Sidebar = ({ products }) => {
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
        allSeries.push({ id: product.series.id, name: product.series.title });
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
        <div className="">
            <>
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
            </>
        </div>
    );
};

export default Sidebar;
