import React from "react";
import ThreeColumnBlockWrapper from "@/app/_components/ThreeColumnBlock";
export const ThreeColumnBlock = ({ threeColumnBlockItems }) => {
    return (
        <>
            <ThreeColumnBlockWrapper
                items={threeColumnBlockItems.items}
                title={threeColumnBlockItems.title}
                align={threeColumnBlockItems.align}
                columns={threeColumnBlockItems.columns}
            />
        </>
    );
};
