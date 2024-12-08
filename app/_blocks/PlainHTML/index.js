import React from "react";
import HtmlParser from "react-html-parser";
export const PlainHTML = ({ Text }) => {
    return (
        <p
            className={`app__layout-container text-[1.125rem] font-light pt-4 mt-2 mb-6 px-5`}
        >
            {HtmlParser(Text)}
        </p>
    );
};
