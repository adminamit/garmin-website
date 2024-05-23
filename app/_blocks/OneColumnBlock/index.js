import React from "react";
import OneColumnBlockWrapper from "@/app/_components/OneColumnBlock";
export const OneColumnBlock = ({ oneColumnBlockItems }) => {
    return (
        <>
            <OneColumnBlockWrapper items={oneColumnBlockItems.items} />
        </>
    );
};
