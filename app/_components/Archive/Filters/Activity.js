import React, { useState } from "react";
import HtmlParser from "react-html-parser";
import { useQueryState } from "nuqs";

const ActivityFilter = ({ allActivity }) => {
    const [activity, setActivity] = useQueryState("activity");
    const [page, setPage] = useQueryState("page");
    const handleActivityUpdate = (id, action) => {
        let activeActivity = activity ? activity.split(",") : [];
        if (!action) {
            const updated = activeActivity.filter((item) => item !== id);
            updated.length === 0
                ? setActivity(null)
                : setActivity(updated.toString()) && setPage("1");
        } else {
            activeActivity.push(id) &&
                setActivity(activeActivity.toString()) &&
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
                            Shop by Activity
                        </h3>
                    </li>
                    {allActivity.map((item) => (
                        <li key={item.name}>
                            <label className="flex items-center justify-between">
                                <div className="flex relative items-center">
                                    <input
                                        id={item.name}
                                        name={item.name
                                            .toLowerCase()
                                            .replace(/\s+/g, "")}
                                        checked={
                                            activity &&
                                            activity
                                                .split(",")
                                                .includes(item.id)
                                        }
                                        type="checkbox"
                                        className="hidden"
                                        onChange={(e) => {
                                            handleActivityUpdate(
                                                item.id,
                                                e.target.checked
                                            );
                                        }}
                                    />

                                    <label
                                        htmlFor={item.name}
                                        className="ml-1 block text-black px-4 py-[0.4rem] filter_checkbox_label cursor-pointer"
                                    >
                                        <span className="text-sm font-regular -mt-1">
                                            {HtmlParser(item.name)}
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

export default ActivityFilter;
