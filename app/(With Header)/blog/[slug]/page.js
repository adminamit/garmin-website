import React from "react";
import Link from "next/link";
import Image from "next/image";
import HtmlParser from "react-html-parser";
import PostList from "@/app/_components/Blog/PostList";
import NewsletterSignup from "@/app/_components/Newsletter";
import BlogNav from "@/app/_components/Blog/BlogNav";
import RelatedProducts from "@/app/_components/Blog/RelatedProducts";
import { serialize } from "@/app/_utilities/GenerateHTML";
import "@/app/_css/blog/post.css";
import RelatedPosts from "@/app/_components/Blog/RelatedPosts";

async function getPostData(slug) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/blogs?where[slug][equals]=${slug}`
    );
    return res.json();
}

const blogCategory = async ({ params: { slug } }) => {
    let post;
    const fetchPost = await getPostData(slug);
    post = fetchPost.docs[0];
    if (!post) {
        return notFound();
    }

    return (
        <div>
            <nav className="blog__breadcrumbs">
                <Link href="/blog">Garmin Blog </Link>
            </nav>
            <BlogNav />

            <div className="post">
                <div className="blog__search">
                    <form action="" method="get" className="form">
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
                            src={post.featuredImage.url}
                            width={0}
                            height={0}
                            unoptimized
                            alt={post.title}
                        />
                    </div>
                    <div className="post__tags">
                        {post.category.map((item) => {
                            return (
                                <Link
                                    key={item.id}
                                    href={`/blog/category/${item.slug}`}
                                >
                                    {item.title}
                                </Link>
                            );
                        })}
                    </div>
                    <h1 className="post__title">{HtmlParser(post.title)} </h1>
                    <div className="post__timestamp">{post.publishDate} </div>
                    {serialize(post.content)}
                </article>
                <div className="post__aside">
                    <ul>
                        <li className="widget">
                            {/* <RelatedProducts products={post.relatedProducts} /> */}
                        </li>
                        <li className="widget">
                            <h2 className="widgettitle">Related</h2>
                            {/* <RelatedPosts posts={post.relatedPosts} /> */}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default blogCategory;
