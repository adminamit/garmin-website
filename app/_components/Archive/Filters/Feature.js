import React, { useState } from "react";

const FeatureFilter = () => {
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

    const series = [
        { name: "Descent Series", count: 9 },
        { name: "vivosmart", count: 1 },
        { name: "Lily", count: 4 },
        { name: "epix", count: 6 },
        { name: "quatix", count: 2 },
        { name: "Lily", count: 4 },
    ];

    return (
        <aside
            className="border-b border-borderColor pb-4 mb-4"
            aria-label="Sidebar"
        >
            <div className="overflow-y-auto">
                <ul className="space-y-1">
                    <li>
                        <h3 className="text-sm font-bold mb-2">
                            Shop by Feature
                        </h3>
                    </li>
                    {series.map((item) => (
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
                                                    .replace(/\s+/g, "")
                                            ]
                                        }
                                        type="checkbox"
                                        className="hidden"
                                        onChange={handleCheckboxChange}
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
            </div>
        </aside>
    );
};

export default FeatureFilter;
