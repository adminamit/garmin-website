import React from "react";
import Link from "next/link";
import Image from "next/image";
import PostList from "@/app/_components/Blog/PostList";
import NewsletterSignup from "@/app/_components/Newsletter";
import BlogNav from "@/app/_components/Blog/BlogNav";
import { BlogSearch } from "@/app/_components/Blog/Search";
// async function getPosts() {
//     const res = await fetch(
//         `${process.env.NEXT_PUBLIC_LIVE_URL}/api/graphQl/blog`,
//         {
//             next: { tags: ["blog"] },
//         }
//     );
//     return res.json();
// }

async function getPosts() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/blogs`, {
        next: { tags: ["blog"] },
    });
    return res.json();
}

const blog = async () => {
    let posts = null;
    const fetchPosts = await getPosts();
    posts = fetchPosts ? fetchPosts.docs : null;

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
                    src="https://static.garmincdn.com/Blog/blog-outdoor_recreation-desktop.jpg"
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
                    <div className="blog__heading__subheading">
                        The latest on our products and technology.{" "}
                    </div>
                </div>
                <BlogSearch />
                {posts ? <PostList posts={posts} /> : <></>}
                <NewsletterSignup />
            </div>
        </div>
    );
};

export default blog;
