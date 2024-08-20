import React, { useState } from "react";
import { useQueryState } from "nuqs";

const FeatureFilter = ({ allFeatures }) => {
    const [features, setFeatures] = useQueryState("features");
    const [page, setPage] = useQueryState("page");

    const handleFeaturesUpdate = (id, action) => {
        let activeFeatures = features ? features.split(",") : [];
        if (!action) {
            const updated = activeFeatures.filter((item) => item !== id);
            updated.length === 0
                ? setFeatures(null)
                : setFeatures(updated.toString()) && setPage("1");
        } else {
            activeFeatures.push(id) &&
                setFeatures(activeFeatures.toString()) &&
                setPage("1");
        }
    };

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
                    {allFeatures.map((item) => (
                        <li key={item.name}>
                            <label className="flex items-center justify-between">
                                <div className="flex relative items-center">
                                    <input
                                        id={item.name}
                                        name={item.name
                                            .toLowerCase()
                                            .replace(/\s+/g, "")}
                                        checked={
                                            features &&
                                            features
                                                .split(",")
                                                .includes(item.id)
                                        }
                                        type="checkbox"
                                        className="hidden"
                                        onChange={(e) => {
                                            handleFeaturesUpdate(
                                                item.id,
                                                e.target.checked
                                            );
                                        }}
                                    />

                                    <label
                                        htmlFor={item.name}
                                        className="ml-1 block text-black px-4 py-[0.4rem] filter_checkbox_label cursor-pointer"
                                    >
                                        <span className="text-sm font-regular">
                                            {item.name}
                                        </span>
                                    </label>
                                </div>
                                {/* <span className="text-gray-900 dark:text-gray-300">
                                    {item.name}
                                </span> */}
                                {/* <span className="text-sm font-light">
                                    ({item.count})
                                </span> */}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default FeatureFilter;
