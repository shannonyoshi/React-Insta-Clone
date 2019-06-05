import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import Likes from "./Likes";

const Post = props => {
  return (
    <div className="post-container">
      <div className="user-info">
        <img
          src={props.post.thumbnailUrl}
          alt="user thumbnail"
          className="user-thumbnail"
        />
        <p className="user-name">{props.post.username}</p>
      </div>
      <img
        src={props.post.imageUrl}
        alt={props.post.username}
        className="post-image"
      />
      <div className="bottom-content">
        <Likes post={props.post} />
        <CommentSection comments={props.post.comments} />
      </div>
    </div>
  );
};

export default Post;
