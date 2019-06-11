import React from "react";
import SingleComment from "./Comment";
import PropTypes from "prop-types";
import { Input } from '../JSstyles';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      input: ""
    };
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addComment = e => {
    e.preventDefault();
    const newComment = {
      id: Date.now(),
      username: JSON.parse(localStorage.getItem("user")),
      text: this.state.input
    };
    this.setState({
      comments: [...this.state.comments, newComment],
      input: ""
    });
  };

  render() {
    return (
      <div className="comment-section">
        {this.state.comments.map(comment => (
          <SingleComment comment={comment} key={comment.id} />
        ))}
        <form onSubmit={this.addComment}>
          <Input wide
            type="text"
            name="input"
            placeholder="Add a comment..."
            onChange={this.handleChanges}
            value={this.state.input}
          />
        </form>
      </div>
    );
  }
}

CommentSection.propTypes = {
  commentArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      useraname: PropTypes.string
    })
  )
};
export default CommentSection;
