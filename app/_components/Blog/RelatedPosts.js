import React from "react";
import Link from "next/link";
import Image from "next/image";
import HtmlParser from "react-html-parser";
const RelatedPosts = ({ posts }) => {
    return (
        <ul className="related-posts">
            {posts.map((post) => {
                return (
                    <li key={post.slug}>
                        <Link href={`/blog/${post.slug}`}>
                            <div className="related-posts__image">
                                <Image
                                    src={post.img}
                                    alt={post.title}
                                    height={200}
                                    width={220}
                                    // unoptimized
                                    quality={100}
                                />
                            </div>
                            <div className="related-posts__info">
                                <div className="related-posts__title">
                                    {HtmlParser(post.title)}
                                </div>
                                <div className="related-posts__timestamp">
                                    {HtmlParser(post.description)}
                                </div>
                            </div>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default RelatedPosts;
