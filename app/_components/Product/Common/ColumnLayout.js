import React from "react";

const ColumnLayout = ({ columns, children, type }) => {
    return (
        <div
            className={
                type == "flex"
                    ? "app__column-layout__column--flex"
                    : `app__column-layout__column--${columns}`
            }
        >
            {children}
        </div>
    );
};

export default ColumnLayout;
