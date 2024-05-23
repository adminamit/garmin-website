"use client";
import React, { useState } from "react";
import SeriesFilter from "./Filters/Series";
import FeatureFilter from "./Filters/Feature";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Sidebar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState([]);

    const [filters, setFilters] = useState({
        descentSeries: false,
        vivosmart: false,
        lily: false,
        // Add the rest of the filters here
    });

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: checked,
        }));
    };

    const activity = [
        { name: "Descent Series", count: 9 },
        { name: "vivosmart", count: 1 },
        { name: "Lily", count: 4 },
        { name: "epix", count: 6 },
        { name: "quatix", count: 2 },
        { name: "Lily", count: 4 },
    ];

    const handleFilterChange = (filter) => {
        // if (selectedFilters.includes(filter)) {
        //     setSelectedFilters(selectedFilters.filter((f) => f !== filter));
        // } else {
        //     setSelectedFilters([...selectedFilters, filter]);
        // }
    };

    return (
        <div className="">
            {selectedFilters.length === 0 ? (
                <>
                    <div class="animate-pulse flex flex-col space-y-4 ">
                        <div className="h-5 w-36 bg-gray-100"></div>
                        <div className="h-5 w-full bg-gray-100"></div>
                        <div className="h-5 w-full bg-gray-100"></div>
                        <div className="h-5 w-full bg-gray-100"></div>
                        <div className="h-5 w-full bg-gray-100"></div>
                        <div className="h-5 w-full bg-gray-100"></div>
                    </div>
                    <div class="animate-pulse flex flex-col space-y-4 mt-8">
                        <div className="h-5 w-36 bg-gray-100"></div>
                        <div className="h-5 w-full bg-gray-100"></div>
                        <div className="h-5 w-full bg-gray-100"></div>
                        <div className="h-5 w-full bg-gray-100"></div>
                        <div className="h-5 w-full bg-gray-100"></div>
                        <div className="h-5 w-full bg-gray-100"></div>
                    </div>

                    <div class="animate-pulse flex flex-col space-y-4 mt-8">
                        <div className="h-5 w-36 bg-gray-100"></div>
                        <div className="h-5 w-full bg-gray-100"></div>
                        <div className="h-5 w-full bg-gray-100"></div>
                        <div className="h-5 w-full bg-gray-100"></div>
                        <div className="h-5 w-full bg-gray-100"></div>
                        <div className="h-5 w-full bg-gray-100"></div>
                    </div>
                </>
            ) : (
                <>
                    <SeriesFilter />
                    <FeatureFilter />

                    <div className="mt-4">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex justify-between w-full"
                        >
                            <span className="text-sm font-bold">Activity</span>

                            <span className="material-icons">
                                {isDropdownOpen ? (
                                    <FaChevronUp />
                                ) : (
                                    <FaChevronDown />
                                )}
                            </span>
                        </button>
                        {isDropdownOpen && (
                            <ul className="text-sm font-light">
                                {activity.map((item) => (
                                    <li key={item.name}>
                                        <label className="flex items-center justify-between">
                                            <div className="flex relative items-center">
                                                <input
                                                    id={item.name}
                                                    name={item.name
                                                        .toLowerCase()
                                                        .replace(/\s+/g, "")}
                                                    checked={
                                                        filters[
                                                            item.name
                                                                .toLowerCase()
                                                                .replace(
                                                                    /\s+/g,
                                                                    ""
                                                                )
                                                        ]
                                                    }
                                                    type="checkbox"
                                                    className="hidden"
                                                    onChange={
                                                        handleCheckboxChange
                                                    }
                                                />

                                                <label
                                                    htmlFor={item.name}
                                                    className="ml-1 block text-black px-4 py-2 filter_checkbox_label"
                                                >
                                                    <span className="text-sm font-light">
                                                        {item.name}
                                                    </span>
                                                </label>
                                            </div>
                                            {/* <span className="text-gray-900 dark:text-gray-300">
                                    {item.name}
                                </span> */}
                                            <span className="text-sm font-light">
                                                ({item.count})
                                            </span>
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </>
            )}
            {/* Add more filters here */}
        </div>
    );
};

export default Sidebar;
