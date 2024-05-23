import React from "react";
import TwoColumnBlockWrapper from "@/app/_components/TwoColumnBlock";
export const TwoColumnBlock = ({ twoColumnBlockItems }) => {
    console.log(twoColumnBlockItems);
    return (
        <>
            <TwoColumnBlockWrapper items={twoColumnBlockItems.items} />
        </>
    );
};
