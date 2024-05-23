import React from "react";
import FeaturesBlock from "@/app/_components/Product/Tabs/Overview/Features/FeaturesBlock";
export const ImageGrid = ({ heading, items }) => {
    const data = { heading, items };
    return <FeaturesBlock {...data} />;
};
