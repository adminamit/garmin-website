import React, { useState } from "react";
import HtmlParser from "react-html-parser";
import { useQueryState } from "nuqs";

const SeriesFilter = ({ allSeries }) => {
    const [series, setSeries] = useQueryState("series");
    const [page, setPage] = useQueryState("page");
    const handleSeriesUpdate = (id, action) => {
        let activeSeries = series ? series.split(",") : [];
        if (!action) {
            const updated = activeSeries.filter((item) => item !== id);
            updated.length === 0
                ? setSeries(null)
                : setSeries(updated.toString()) && setPage("1");
        } else {
            activeSeries.push(id) &&
                setSeries(activeSeries.toString()) &&
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
                            Shop by Series
                        </h3>
                    </li>
                    {allSeries.map((item) => (
                        <li key={item.name} className="">
                            <label className="flex items-center justify-between">
                                <div className="flex relative items-center">
                                    <input
                                        id={item.name}
                                        name={item.name
                                            .toLowerCase()
                                            .replace(/\s+/g, "")}
                                        checked={
                                            series &&
                                            series.split(",").includes(item.id)
                                        }
                                        type="checkbox"
                                        className="hidden"
                                        onChange={(e) => {
                                            handleSeriesUpdate(
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

export default SeriesFilter;
