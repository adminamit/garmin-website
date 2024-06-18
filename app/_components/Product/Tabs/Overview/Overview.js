import React from "react";
import { Blocks } from "@/app/_components/Blocks";
export const Overview = ({ productData }) => {
    return (
        <div>
            <React.Fragment>
                <Blocks blocks={productData.overview} />
            </React.Fragment>
        </div>
    );
};
