import React from "react";
import "./index.css";
import { serialize } from "@/app/_utilities/GenerateHTML";
export const CopyFootnote = ({ copy, theme }) => {
    return (
        <div
            className={`app__layout-container app__layout-container app__layout-container--${theme}`}
        >
            <div className="app__disclaimer__block">{serialize(copy)}</div>
        </div>
    );
};
