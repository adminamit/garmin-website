import React from "react";
import Image from "next/image";
import Link from "next/link";
import HtmlParser from "react-html-parser";
import "@/app/_css/blog/post.css";
const Post = ({ post }) => {
    return (
        <article className="post-card">
            <Link href={`/blog/${post.slug}`}>
                <div className="post-card__image">
                    <Image
                        src={post.featuredImage.url}
                        alt=""
                        width={0}
                        height={0}
                        unoptimized
                    />
                </div>
                <ul className="post-card__categories">
                    {post.category.map((item) => {
                        return (
                            <li key={item.id}>
                                <Link href={`/blog/category/${item.slug}`}>
                                    {item.title}
                                </Link>{" "}
                            </li>
                        );
                    })}
                </ul>
                <h1 className="post-card__title">{HtmlParser(post.title)}</h1>
                <div className="post-card__date">{post.date} </div>
            </Link>
        </article>
    );
};

export default Post;
