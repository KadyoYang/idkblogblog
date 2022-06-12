import React from "react";
import styled from "styled-components";
import { Author, PostType } from "../../lib/commonType";

type PostCardProps = {
    post: PostType;
};
const PostCard: React.FC<PostCardProps> = ({ post }) => {
    return (
        <PostCardWrapper>
            <div className="og_image"></div>
            <div className="content">
                <span>{post.title}</span>
                <div>
                    <span>tags</span>
                    <span>{post.date.toISOString()}</span>
                </div>
                <div>{post.content}</div>
            </div>
        </PostCardWrapper>
    );
};

const PostCardWrapper = styled.div`
    display: flex;
    height: 80px;

    .og_image {
        flex-basis: 30%;
    }
    .content {
        flex-basis: 70%;
    }
`;

export default PostCard;
