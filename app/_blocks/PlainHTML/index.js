import React from "react";
import HtmlParser from "react-html-parser";
export const PlainHTML = ({ Text }) => {
    return (
        <div className={`app__layout-container text-[1.125rem] font-light text-center pt-4 mt-2 mb-6 px-5`}>
            {Text ? HtmlParser(Text) : ""}
        </div>
    );
};
