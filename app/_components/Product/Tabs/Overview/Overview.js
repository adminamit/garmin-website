import React from "react";
import { Blocks } from "@/app/_components/Blocks";
export const Overview = ({ overviewBlocks }) => {
    return (
        <div>
            <React.Fragment>
                <Blocks blocks={overviewBlocks} />
            </React.Fragment>
        </div>
    );
};
