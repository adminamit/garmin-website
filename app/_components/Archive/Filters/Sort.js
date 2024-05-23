import React, { useState } from "react";
import { HiOutlineSelector } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const SortFilter = ({ compare, handleCompareChange }) => {
    const [selectedOption, setSelectedOption] = useState("featured");

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
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
                    value={selectedOption}
                    onChange={handleSelectChange}
                    className=""
                >
                    <option value="featured">Featured Products</option>
                    <option value="priceLowToHigh">Price: Low to High</option>
                    <option value="priceHighToLow">Price: High to Low</option>
                    {/* Add more sorting options here */}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <HiOutlineSelector className="fill-current h-4 w-4" />
                </div>
            </div>
        </div>
    );
};

export default SortFilter;
