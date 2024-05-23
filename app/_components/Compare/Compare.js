import React, { useState } from "react";
import { useQueryState } from "nuqs";

export const Compare = () => {
    const [compareProducts, setCompareProducts] = useState([]);
    const [compare, setCompare] = useQueryState("compare");
    const [compareProductParam, setCompareProductParam] =
        useQueryState("compareProduct");

    const handleCompareProductsChange = (id, action) => {
        let activeCompareProducts = compareProductParam
            ? compareProductParam.split(",")
            : [];
        if (action === "REMOVE") {
            const updated = activeCompareProducts.filter((item) => item !== id);
            setCompareProductParam(updated.toString());
        } else if (action === "ADD") {
            activeCompareProducts.length < 5
                ? activeCompareProducts.push(id) &&
                  setCompareProductParam(activeCompareProducts.toString())
                : null;
        }
    };
    const handleCompareChange = (state) => {
        state ? setCompare("1") : setCompare(null);
    };
    return <div>Compare</div>;
};
