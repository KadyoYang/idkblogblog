import styled from "styled-components";
import PostCardList from "../../components/common/PostCardList";
import { PostType } from "../../lib/commonType";

const TestIndex = () => {
    const testPost: PostType = {
        author: {
            name: "hiname",
            picture: "/pic",
        },
        coverImage: "/cover/pic",
        content: "hello content",
        date: new Date(),
        ogImage: {
            url: "https://umumum.net",
        },
        slug: "test-test",
        tags: ["tag1", "tag2"],
        title: "this is title",
    };

    const posts: PostType[] = [
        testPost,
        testPost,
        testPost,
        testPost,
        testPost,
    ];

    return (
        <TestIndexWrapper>
            <PostCardList posts={posts}></PostCardList>
        </TestIndexWrapper>
    );
};

const TestIndexWrapper = styled.div`
    margin: 0 auto;
    width: 900px;
    min-height: 1500px;
    background-color: grey;
`;
export default TestIndex;
