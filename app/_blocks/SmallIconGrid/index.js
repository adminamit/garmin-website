import React from "react";
import FeaturesBlock from "@/app/_components/Product/Tabs/Overview/Features/FeaturesBlock";
export const SmallIconGrid = ({ items }) => {
    const data = { items };
    return <FeaturesBlock {...data} columns={6} />;
};
