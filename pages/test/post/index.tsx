import React from "react";
import Link from "next/link";
import markdownToHtml from "../../../lib/markdownToHtml";
import {
    getAllPosts,
    getPostSlugs,
    postsDirectory,
    PostType,
} from "../../../lib/postApi";

type PostIndexProps = {
    posts: PostType[];
};
const Index: React.FC<PostIndexProps> = ({ posts }) => {
    return (
        <div>
            <h1>this is index of test dir</h1>
            {posts.map((post, idx) => {
                return (
                    <Link href={`/test/post/${post.slug}`} key={idx} passHref>
                        <h3>{post.title}</h3>
                    </Link>
                );
            })}
        </div>
    );
};

// export const getServerSideProps = async () => {
//     console.log(postsDirectory);
//     console.log(getPostSlugs());
//     return {
//         props: {
//             umm: "aaa",
//         },
//     };
// };

export const getStaticProps = async () => {
    const posts = getAllPosts([
        "author",
        "title",
        "date",
        "slug",
        "author",
        "content",
        "ogImage",
        "coverImage",
    ]);
    // const content = await markdownToHtml(posts)
    return {
        props: {
            posts: posts,
        },
    };
};

export default Index;
