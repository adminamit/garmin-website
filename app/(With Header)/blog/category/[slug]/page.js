"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import PostList from "@/app/_components/Blog/PostList";
import NewsletterSignup from "@/app/_components/Newsletter";
import BlogNav from "@/app/_components/Blog/BlogNav";
const blogCategory = () => {
    const posts = [
        {
            slug: "garmin-marine-mapping-you-can-count-on-moving-forward/",
            categories: ["general"],
            featured:
                "https://www.garmin.com/en-GB/blog/wp-content/uploads/2024/02/Cartography-Updates-blog.webp",
            title: "Garmin Marine Mapping You Can Count on Moving Forward ",
            date: "21 February, 2024",
        },
        {
            slug: "increased-physical-activity-improves-quality-of-life-in-patients-with-congenital-heart-defects/",
            categories: ["Health"],
            featured:
                "https://www.garmin.com/en-GB/blog/wp-content/uploads/2024/02/Cartography-Updates-blog.webp",
            title: "Increased Physical Activity Improves Quality of Life in Patients with Congenital Heart Defects",
            date: "15 February, 2024",
        },
        {
            slug: "wheelchair-workouts-with-garmin-smartwatches/",
            categories: ["general", "fitness"],
            featured:
                "https://www.garmin.com/en-GB/blog/wp-content/uploads/2024/02/Cartography-Updates-blog.webp",
            title: "Wheelchair Workouts with Garmin Smartwatches",
            date: "12 February, 2024",
        },
        {
            slug: "garmin-marine-mapping-you-can-count-on-moving-forward-2/",
            categories: ["general"],
            featured:
                "https://www.garmin.com/en-GB/blog/wp-content/uploads/2024/02/Cartography-Updates-blog.webp",
            title: "Garmin Marine Mapping You Can Count on Moving Forward ",
            date: "21 February, 2024",
        },
        {
            slug: "increased-physical-activity-improves-quality-of-life-in-patients-with-congenital-heart-defects-2/",
            categories: ["Health"],
            featured:
                "https://www.garmin.com/en-GB/blog/wp-content/uploads/2024/02/Cartography-Updates-blog.webp",
            title: "Increased Physical Activity Improves Quality of Life in Patients with Congenital Heart Defects",
            date: "15 February, 2024",
        },
        {
            slug: "wheelchair-workouts-with-garmin-smartwatches-2/",
            categories: ["general", "fitness"],
            featured:
                "https://www.garmin.com/en-GB/blog/wp-content/uploads/2024/02/Cartography-Updates-blog.webp",
            title: "Wheelchair Workouts with Garmin Smartwatches",
            date: "12 February, 2024",
        },
    ];

    return (
        <div>
            <nav className="blog__breadcrumbs">
                <Link href="/blog">Garmin Blog </Link>
            </nav>

            <section
                className="blog__hero-banner"
                role="region"
                aria-label="Hero Banner"
            >
                <Image
                    src="https://static.garmincdn.com/gdc/home-page/segments/3-hero_bike_cycling-V2.jpg"
                    alt=""
                    height={0}
                    width={0}
                    unoptimized
                />
            </section>
            <BlogNav />

            <div className="main">
                <div className="blog__heading">
                    <h1>Blog </h1>
                </div>
                <div className="container">
                    <div className="blog__search">
                        <form
                            action="https://www.garmin.com/en-GB/blog"
                            method="get"
                            className="form"
                        >
                            <div className="form__search">
                                <input
                                    type="search"
                                    name="s"
                                    id="search"
                                    value=""
                                    placeholder="Search Blog"
                                    aria-label="Search Blog"
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <PostList posts={posts} />
                <NewsletterSignup />
            </div>
        </div>
    );
};

export default blogCategory;
