"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useQueryState } from "nuqs";
export const Search = () => {
    const router = useRouter();
    const [active, setActive] = useState(false);
    const [query, setQuery] = useState("");
    // const handleChange()
    return (
        <>
            <CiSearch
                className="gh__utility-bar__search"
                onClick={() => setActive(true)}
            />

            <div
                className={`gh__search js__gh__search ${
                    active ? "gh__search--active" : ""
                }`}
            >
                <div className="gh__search-form" id="js__search-form">
                    {/* <span className="gh__search__input__icon"> */}
                    <CiSearch className="gh__search__input__icon" />
                    {/* </span> */}
                    <input
                        type="text"
                        className="gh__search__input"
                        onChange={(e) => {
                            setQuery(e.target.value);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                setActive(false);
                                router.push(`/search/?query=${query}`);
                            }
                        }}
                    />
                    <span className="gh__search__close" id="js__search-close">
                        <IoIosClose
                            className="gh__search__close__icon"
                            onClick={() => setActive(false)}
                        />
                    </span>
                </div>
            </div>
        </>
    );
};
