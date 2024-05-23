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
        <div className="">
            <CiSearch
                className="w-6 h-6 cursor-pointer"
                onClick={() => setActive(true)}
            />

            {active ? (
                <div className="flex justify-between items-center border shadow-none px-2 absolute bg-white -right-1 top-[12px] z-[200]">
                    <CiSearch className="w-5 h-5 cursor-pointer" />
                    <input
                        type="text"
                        className="!outline-none !border-0 w-40 !ring-0 !shadow-none !outline-0"
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
                    <IoIosClose
                        className="w-5 h-5 cursor-pointer"
                        onClick={() => setActive(false)}
                    />
                </div>
            ) : (
                " "
            )}
        </div>
    );
};
