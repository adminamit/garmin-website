import React from "react";
import Link from "next/link";
import Image from "next/image";
import PostList from "@/app/_components/Blog/PostList";
import NewsletterSignup from "@/app/_components/Newsletter";
import BlogNav from "@/app/_components/Blog/BlogNav";
import notFound from "@/app/(With Header)/not-found";
import { BlogSearch } from "@/app/_components/Blog/Search";
// async function getCategory(slug) {
//     const res = await fetch(
//         `${process.env.NEXT_PUBLIC_LIVE_URL}/api/graphQl/blog/category?slug=${slug}`
//     );
//     return res.json();
// }
// async function getCategoryPosts(id) {
//     const res = await fetch(
//         `${process.env.NEXT_PUBLIC_LIVE_URL}/api/graphQl/blog/categoryPosts?id=${id}`
//     );
//     return res.json();
// }
async function getCategory(slug) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/blog-category?where[slug][equals]=${slug}`,
        {
            next: { tags: ["blogCategory"] },
        }
    );
    return res.json();
}

async function getCategoryPosts(id) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/blogs?where[category][equals]=${id}`,
        {
            next: { tags: ["categoryPosts"] },
        }
    );
    return res.json();
}

const blogCategory = async ({ params: { slug } }) => {
    let category,
        posts = null;
    const fetchCategory = await getCategory(slug);
    category = fetchCategory.docs[0];
    if (!category) {
        return notFound();
    } else {
        const fetchPosts = await getCategoryPosts(category.id);
        posts = fetchPosts.docs ? fetchPosts.docs : null;
    }

    return (
        <div>
            <nav className="blog__breadcrumbs">
                <Link href="/blog">Garmin Blog </Link>
            </nav>

            {category.featuredImage ? (
                <section
                    className="blog__hero-banner"
                    role="region"
                    aria-label="Hero Banner"
                >
                    <Image
                        src={category.featuredImage.url}
                        alt=""
                        height={0}
                        width={0}
                        unoptimized
                    />
                    )
                </section>
            ) : (
                <></>
            )}
            <BlogNav />

            <div className="main">
                <div className="blog__heading">
                    <h1>Blog </h1>
                </div>
                <BlogSearch />
                {posts && posts.length > 0 ? (
                    <PostList posts={posts} />
                ) : (
                    <div className="flex justify-center items-center py-8">
                        No matching posts found.
                    </div>
                )}
                <NewsletterSignup />
            </div>
        </div>
    );
};

export default blogCategory;
