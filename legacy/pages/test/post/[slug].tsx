import React from "react";
import markdownToHtml from "../../../lib/markdownToHtml";
import { getAllPosts, getPostBySlug, PostType } from "../../../lib/postApi";

type PostsProps = {
    post: PostType;
};
const Posts: React.FC<PostsProps> = ({ post }) => {
    return (
        <>
            <h2>{post.title}</h2>
            <h2>{post.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </>
    );
};

//@ts-ignore
export const getStaticProps = async ({ params }) => {
    const post = getPostBySlug(params.slug, [
        "title",
        "date",
        "slug",
        "author",
        "content",
        "ogImage",
        "coverImage",
    ]);
    const content = await markdownToHtml(post.content || "");

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    };
};

export const getStaticPaths = async () => {
    const posts = getAllPosts(["slug"]);

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            };
        }),
        fallback: false,
    };
};

export default Posts;
