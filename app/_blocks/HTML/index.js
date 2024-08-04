import React from "react";
import { serialize } from "@/app/_utilities/GenerateHTML";
export const HTML = ({ Text }) => {
    return (
        <p
            className={`app__layout-container text-[1.125rem] font-light pt-4 mt-2 mb-6 px-5`}
        >
            {serialize(Text)}
        </p>
    );
};
