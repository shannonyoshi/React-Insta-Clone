import React from "react";
import {FaHeart} from 'react-icons/fa';
import {FaRegHeart} from 'react-icons/fa';
import {FaRegComment} from 'react-icons/fa';

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
          {this.state.liked===true ? <FaHeart style= {{color:"red"}} onClick={this.likePost} className="likes-icons" /> : <FaRegHeart onClick={this.likePost} className="likes-icons"/>}
          <FaRegComment className="likes-icons"/>
        </div>
        <p className="likes">{this.state.likes} likes</p>
      </>
    );
  }
}

export default Likes;
