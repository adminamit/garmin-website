import React from "react";
import HtmlParser from "react-html-parser";
export const Headline = ({ heading, position, size }) => {
    return (
        <h1
            className={`${
                size == "big" ? "text-[2.5rem]" : "text-[2rem]"
            } oswald font-light text-center mt-12 mb-8`}
        >
            {heading ? HtmlParser(heading) : ""}
        </h1>
    );
};
