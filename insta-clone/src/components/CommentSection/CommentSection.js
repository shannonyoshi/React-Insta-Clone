import React from 'react';
import Comment from './Comment';
import './CommentSection.css'
import PropTypes from 'prop-types';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            input: ''};
    }
    handleChanges = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    addComment=(e)=>{
        e.preventDefault();
        const newComment ={
          id: Date.now(),
          username: 'anonymous',
          text: this.state.input
        };
        this.setState({
          comments:[...this.state.comments, newComment], 
          input: ''
        })
    }

    //comments are being added to state, but not rerendering
    render(){
    return(
        <div className = 'comment-section'>
            {this.state.comments.map(comment=>(
                <Comment comment = {comment} key = {comment.id} />
            ))}
            <form onSubmit={this.addComment}>
                <input
                    type='text'
                    name='input'
                    placeholder='Add a comment...'
                    onChange={this.handleChanges}
                    value={this.state.input}
                />
            </form>
        </div>
    )}
    
}

CommentSection.propTypes = {
    commentArray: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
        useraname: PropTypes.string,
    }))

}
export default CommentSection