import React from "react";
import Link from "next/link";
import Image from "next/image";
import PostList from "@/app/_components/Blog/PostList";
import NewsletterSignup from "@/app/_components/Newsletter";
import BlogNav from "@/app/_components/Blog/BlogNav";
import { BlogSearch } from "@/app/_components/Blog/Search";
// import { useSearchParams } from "next/navigation";

const fetchBlogResults = async (query) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/blogs/search?query=${query}`,
        { next: { tags: ["blogSearch"] } }
    );
    return await res.json();
};

const blog = async ({ searchParams }) => {
    // const searchParams = useSearchParams()
    const query = searchParams.query;
    let posts = null;
    const fetchPosts = await fetchBlogResults(query);
    posts = fetchPosts ? fetchPosts.docs : null;
    console.log("posts");
    console.log(posts);
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
                {posts && posts.length > 0 ? (
                    <PostList posts={posts} />
                ) : (
                    <div className="text-center">No results found!</div>
                )}
                <NewsletterSignup />
            </div>
        </div>
    );
};

export default blog;
