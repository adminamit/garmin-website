import React from "react";
import "@/app/_css/product/container.css";

export const Container = ({ children, width, theme }) => {
    return (
        <div className={`app__layout-container ${width} ${theme}`}>
            {children}
        </div>
    );
};
