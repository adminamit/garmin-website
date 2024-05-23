import React from "react";
import { serialize } from "@/app/_utilities/GenerateHTML";
import HtmlParser from "react-html-parser";
const BoxContent = ({ content }) => {
    return <div>{serialize(content)}</div>;
};

export default BoxContent;
