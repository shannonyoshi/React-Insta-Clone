import React from "react";
import Post from "./Post";

import "./PostContainer.css";

const PostsContainer = props => {
  return (
    <>
      {props.posts.map(item => (
        <Post post={item} key={item.id} />
      ))}
    </>
  );
};

export default PostsContainer;
