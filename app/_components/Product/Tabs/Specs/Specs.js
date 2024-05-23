import React from "react";
import Table from "./Table";
import "@/app/_css/product/specs.css";
const Specs = ({ productSpecifications }) => {
    return (
        <div>
            <Table productSpecifications={productSpecifications} />
        </div>
    );
};

export default Specs;
