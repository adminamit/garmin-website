import React from "react";
import HtmlParser from "react-html-parser";
export const Heading = ({ title }) => {
    return (
        <div className="">
            <h1 className="mb-4 text-[2.5rem] oswald text-center tracking-wide">
                <p>{HtmlParser(title)}</p>
            </h1>
        </div>
    );
};
