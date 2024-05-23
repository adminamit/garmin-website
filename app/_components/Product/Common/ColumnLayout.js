import React from "react";

const ColumnLayout = ({ columns, children }) => {
    return (
        <div className={`app__column-layout__column--${columns}`}>
            {children}
        </div>
    );
};

export default ColumnLayout;
