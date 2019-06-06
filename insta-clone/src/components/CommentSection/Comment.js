import React from "react";
import styled from 'styled-components';
import { Username } from "../JSstyles";

const AComment = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 10px 0px;
`;

const CommentText = styled.p`
  padding-left: 5px;
`;

const SingleComment = props => {
  return (
    <AComment>
      <Username>{props.comment.username}</Username>
      <CommentText>{props.comment.text}</CommentText>
    </AComment>
  );
};

export default SingleComment;
