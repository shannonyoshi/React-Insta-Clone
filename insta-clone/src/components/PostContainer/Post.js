import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import Likes from "./Likes";
import styled from "styled-components";
import { Username } from "../JSstyles";
import { UserPic } from "../JSstyles";

const PostContainer = styled.div`
  width: 95vw;
  border: 1px solid lightgray;
  margin: 20px auto;
  max-width: 500px;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const PostImg = styled.img`
  width: 98%;
  padding: 1%;
`;

const BottomContent = styled.div`
  padding: 0px 1em;
  font-size: 0.85em;
`;

const Post = props => {
  return (
    <PostContainer>
      <UserInfo>
        <UserPic src={props.post.thumbnailUrl} alt="user thumbnail" />
        <Username bold>{props.post.username}</Username>
      </UserInfo>
      <PostImg src={props.post.imageUrl} alt={props.post.username} />
      <BottomContent>
        <Likes post={props.post} />
        <CommentSection comments={props.post.comments} />
      </BottomContent>
    </PostContainer>
  );
};

export default Post;
