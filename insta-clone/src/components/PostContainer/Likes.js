import React from "react";

class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: props.post,
      likes: props.post.likes,
      liked: false
    };
  }
  likePost = e => {
    if (this.state.liked === false) {
      this.setState({ likes: this.state.likes + 1, liked: true });
    } else {
      this.setState({ likes: this.state.likes - 1, liked: false });
    }
  };

  render() {
    return (
      <>
        <div className="Likes">
          <i
            className={
              this.state.liked === true ? "fas fa-heart liked" : "far fa-heart"
            }
            onClick={this.likePost}
          />
          <i className="far fa-comment" />
        </div>
        <p className="likes">{this.state.likes} likes</p>
      </>
    );
  }
}

export default Likes;
