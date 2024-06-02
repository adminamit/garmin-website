import React from "react";
import FeaturesBlock from "@/app/_components/Product/Tabs/Overview/Features/FeaturesBlock";
export const IconGrid = ({ items, heading }) => {
    const data = { items };
    return <FeaturesBlock {...data} columns={5} heading={heading} />;
};
