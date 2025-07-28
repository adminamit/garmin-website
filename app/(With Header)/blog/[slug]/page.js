import React from "react";
import Link from "next/link";
import Image from "next/image";
import HtmlParser from "react-html-parser";
import PostList from "@/app/_components/Blog/PostList";
import NewsletterSignup from "@/app/_components/Newsletter";
import BlogNav from "@/app/_components/Blog/BlogNav";
import RelatedProducts from "@/app/_components/Blog/RelatedProducts";
import { serialize } from "@/app/_utilities/GenerateHTML";
import { BlogSearch } from "@/app/_components/Blog/Search";
import "@/app/_css/blog/post.css";
import RelatedPosts from "@/app/_components/Blog/RelatedPosts";

async function getPostData(slug) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/blogs?where[slug][equals]=${slug}`,
        {
            next: { tags: ["post"] },
        }
    );
    return res.json();
}

const Post = async ({ params: { slug } }) => {
    let post = null;
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
                <BlogSearch />

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
                        {post.category &&
                            post.category.map((item) => {
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
                    <h1 className="post__title">{post.title ? HtmlParser(post.title) : ""} </h1>
                    <div className="post__timestamp">{post.publishDate} </div>
                    {serialize(post.content)}

                    <NewsletterSignup />
                </article>
                <div className="post__aside">
                    <ul>
                        <li className="widget">
                            {post.relatedProducts ? (
                                <RelatedProducts
                                    products={post.relatedProducts}
                                />
                            ) : (
                                <></>
                            )}
                        </li>
                        {/* <li className="widget">
                            <h2 className="widgettitle">Related</h2>
                            <RelatedPosts posts={post.relatedPosts} />
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Post;
