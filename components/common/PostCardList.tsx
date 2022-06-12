import styled from "styled-components";
import { PostType } from "../../lib/commonType";
import PostCard from "./PostCard";

type PostCardListProps = {
    posts: PostType[];
};

const PostCardList: React.FC<PostCardListProps> = ({ posts }) => {
    return (
        <PostCardListWrapper>
            {posts.map((post, idx) => {
                return <PostCard post={post} key={idx} />;
            })}
        </PostCardListWrapper>
    );
};

const PostCardListWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export default PostCardList;
