"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export const BlogSearch = () => {
    const router = useRouter();
    const [query, setQuery] = useState("");
    return (
        <div className="container">
            <div className="blog__search">
                <div className="form">
                    <div className="form__search">
                        <input
                            type="search"
                            name="s"
                            id="search"
                            placeholder="Search Blog"
                            aria-label="Search Blog"
                            onChange={(e) => {
                                setQuery(e.target.value);
                            }}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    router.push(`/blog/search?query=${query}`);
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
