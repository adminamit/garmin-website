import React from "react";
import Post from "./Post";
import Pagination from "@/app/_components/Archive/Pagination";
const PostList = ({ posts }) => {
    return (
        <div className="post-list">
            <div className="post-list__wrapper">
                {posts &&
                    posts.map((post) => {
                        return <Post post={post} key={post.slug} />;
                    })}
            </div>
            <Pagination posts={posts} />
        </div>
    );
};

export default PostList;
