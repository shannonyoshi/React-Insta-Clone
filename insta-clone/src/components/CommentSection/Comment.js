import React from "react";

const Comment = props => {
  return (
    <div className="comment">
      <p className="comment-user">{props.comment.username}</p>
      <p className="comment-text">{props.comment.text}</p>
    </div>
  );
};

export default Comment;
