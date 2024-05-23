"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const BlogNav = () => {
    const pathname = usePathname();
    const categories = [
        {
            id: "0293-344",
            slug: "automotive",
            title: "Automotive",
            icon: "icon-car",
        },
        {
            id: "0293-444",
            slug: "cycling",
            title: "Cycling",
            icon: "icon-bicyling",
        },
        {
            id: "0293-354",
            slug: "health",
            title: "Health",
            icon: "icon-heartrate",
        },
        {
            id: "0293-099",
            slug: "marine",
            title: "Marine",
            icon: "icon-boat",
        },
        {
            id: "0293-304",
            slug: "outdoor",
            title: "Outdoor Recreation",
            icon: "icon-mountain",
        },
        {
            id: "0293-3984",
            slug: "running",
            title: "Running",
            icon: "icon-running",
        },
    ];
    return (
        <nav className="blog__nav">
            <div className="blog__nav__wrapper">
                <ul id="primary-navigation-menu" className="">
                    {categories.map((category) => {
                        return (
                            <li
                                key={category.id}
                                className={`${category.icon} menu-item ${
                                    pathname ===
                                    "/blog/category/" + category.slug
                                        ? "active"
                                        : ""
                                }`}
                            >
                                <Link href={`/blog/category/${category.slug}/`}>
                                    {category.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default BlogNav;
