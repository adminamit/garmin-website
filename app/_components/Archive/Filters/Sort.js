import React, { useState } from "react";
import { HiOutlineSelector } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useQueryState } from "nuqs";

const SortFilter = ({ compare, handleCompareChange }) => {
    const [sortBy, setSortBy] = useQueryState("sortBy");
    const handlesortByUpdate = (sort) => {
        setSortBy(sort);
    };

    return (
        <div className="product-grid__options flex justify-between items-center bg-white p-4">
            <button
                className={`${
                    compare ? "bg-black text-white" : "text-black"
                }  border border-black  px-6 py-2 text-sm oswald tracking-wide flex items-center gap-4`}
                onClick={() => handleCompareChange(compare ? false : true)}
            >
                <span>COMPARE</span>
                {compare ? <IoClose /> : " "}
            </button>
            <div className="relative flex dropdown items-center">
                <span className="text-sm font-bold w-[100px]">Sort By</span>
                <select
                    onChange={(e) => {
                        handlesortByUpdate(e.target.value);
                    }}
                    defaultValue={sortBy}
                    className=""
                >
                    <option value="title">A to Z</option>
                    <option value="-title">Z to A</option>
                    <option value="price">Price: Low to High</option>
                    <option value="-price">Price: High to Low</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <HiOutlineSelector className="fill-current h-4 w-4" />
                </div>
            </div>
        </div>
    );
};

export default SortFilter;
