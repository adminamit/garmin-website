"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import HtmlParser from "react-html-parser";
import PostList from "@/app/_components/Blog/PostList";
import NewsletterSignup from "@/app/_components/Newsletter";
import BlogNav from "@/app/_components/Blog/BlogNav";
import RelatedProducts from "@/app/_components/Blog/RelatedProducts";

import "@/app/_css/blog/post.css";
import RelatedPosts from "@/app/_components/Blog/RelatedPosts";

const blogCategory = async () => {
    const post = {
        slug: "garmin-marine-mapping-you-can-count-on-moving-forward/",
        categories: [
            {
                slug: "general",
                title: "General",
            },
            {
                slug: "sports-fitness",
                title: "Sports & Fitness",
            },
        ],
        featured:
            "https://www.garmin.com/en-GB/blog/wp-content/uploads/2024/02/Cartography-Updates-blog.webp",
        title: "Garmin Marine Mapping You Can Count on Moving Forward ",
        date: "21 February, 2024",
        content:
            '<p><strong><em>New data shows Garmin customers work year-round to meet their goals — no New Year’s resolutions needed.</em></strong></p><p>The champagne has been popped and Auld Lang Syne has been sung. Now what? Many people use this time as an opportunity to set new goals but before you get too focused on how to change your habits, let’s take the time to appreciate how far you’ve come. Because we happen to think that Garmin customers were pretty great to begin with.</p><p>Take 2023, for example. As with years past, we decided to take a deep dive into the data collected in the <a href="https://www.garmin.com/en-GB/p/125677">Garmin Connect™ app</a>, a tool used by millions of fitness lovers worldwide to track just about every health and fitness metric you can think of. And, as suspected, Garmin customers don’t need a holiday to serve as a reminder to continue to beat yesterday. You all spent the entirety of 2023 pushing yourselves to achieve new goals, and the numbers show it.</p><h2 className="wp-block-heading">Top Activities of 2023</h2><figure className="wp-block-image size-large"><img fetchpriority="high" decoding="async" width="1024" height="384" src="https://www.garmin.com/en-GB/blog/wp-content/uploads/2023/12/Top-5-activities-1024x384.jpg" alt="" className="wp-image-9741" srcset="https://www.garmin.com/en-GB/blog/wp-content/uploads/2023/12/Top-5-activities-1024x384.jpg 1024w, https://www.garmin.com/en-GB/blog/wp-content/uploads/2023/12/Top-5-activities-300x113.jpg 300w, https://www.garmin.com/en-GB/blog/wp-content/uploads/2023/12/Top-5-activities-768x288.jpg 768w, https://www.garmin.com/en-GB/blog/wp-content/uploads/2023/12/Top-5-activities.jpg 1428w" sizes="(max-width: 1024px) 100vw, 1024px"></figure><p>As a group, you completed more of nearly every activity you’re passionate about than you did in 2022 — but some, of course, stand out more than others. Based on total activity counts, here’s how Garmin users moved the most this year:</p><p>Didn’t see your preferred fitness routine included? Don’t worry — we’ve got plenty more data where that came from. Keep reading to learn which of our activity categories showed serious growth in 2023 as compared to 2022. Spoiler alert: It’s most of them.</p><h3 className="wp-block-heading">Running</h3><p className="has-small-font-size"><sup>1</sup>See <a href="https://www.garmin.com/en-US/legal/atdisclaimer/">Garmin.com/ataccuracy</a></p>',

        relatedProducts: [
            {
                id: "8828-0932",
                img: "https://www.garmin.com/en-GB/blog/wp-content/uploads/2022/09/Forerunner265_HR_2000.jpg",
                title: "Forerunner® 265",
                description: "Train Brilliantly With AMOLED Display ",
            },
            {
                id: "8098-0932",
                img: "https://www.garmin.com/en-GB/blog/wp-content/uploads/2022/09/Forerunner965_HR_2000.jpg",
                title: "Forerunner® 965",
                description: "Train Brilliantly With AMOLED Display ",
            },
        ],
        relatedPosts: [
            {
                slug: "garmin-marine-mapping-you-can-count-on-moving-forward",
                img: "https://www.garmin.com/en-GB/blog/wp-content/uploads/2024/02/Cartography-Updates-blog.webp",
                title: "Garmin Marine Mapping You Can Count on Moving Forward",
                time: "21 February, 2024",
            },
            {
                slug: "garmin-marine-mapping-you-can-count-on-moving-forward",
                img: "https://www.garmin.com/en-GB/blog/wp-content/uploads/2024/02/Cartography-Updates-blog.webp",
                title: "Garmin Marine Mapping You Can Count on Moving Forward",
                time: "21 February, 2024",
            },
            {
                slug: "garmin-marine-mapping-you-can-count-on-moving-forward",
                img: "https://www.garmin.com/en-GB/blog/wp-content/uploads/2024/02/Cartography-Updates-blog.webp",
                title: "Garmin Marine Mapping You Can Count on Moving Forward",
                time: "21 February, 2024",
            },
            {
                slug: "garmin-marine-mapping-you-can-count-on-moving-forward",
                img: "https://www.garmin.com/en-GB/blog/wp-content/uploads/2024/02/Cartography-Updates-blog.webp",
                title: "Garmin Marine Mapping You Can Count on Moving Forward",
                time: "21 February, 2024",
            },
        ],
    };

    return (
        <div>
            <nav className="blog__breadcrumbs">
                <Link href="/blog">Garmin Blog </Link>
            </nav>
            <BlogNav />

            <div className="post">
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

                <article className="post__main">
                    <div className="post__featured-image">
                        <Image
                            src={post.featured}
                            width={0}
                            height={0}
                            unoptimized
                            alt={post.title}
                        />
                    </div>
                    <div className="post__tags">
                        {post.categories.map((category) => {
                            return (
                                <Link
                                    href={`/blog/category/${category.slug}/`}
                                    key={category}
                                >
                                    {category.title}
                                </Link>
                            );
                        })}
                    </div>
                    <h1 className="post__title">2023 Garmin Fitness Report </h1>
                    <div className="post__timestamp">4 January, 2024 </div>
                    {HtmlParser(post.content)}
                </article>
                <div className="post__aside">
                    <ul>
                        <li className="widget">
                            <RelatedProducts products={post.relatedProducts} />
                        </li>
                        <li className="widget">
                            <h2 className="widgettitle">Related</h2>
                            <RelatedPosts posts={post.relatedPosts} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default blogCategory;
