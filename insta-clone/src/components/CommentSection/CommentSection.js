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
            input:e.target.value
        })
    }

    // addComment=(e, inputText)=>{
    //     e.preventDefault();
    //     const newComment ={
    //       id: this.props.commentArray.length,
    //       username: 'anonymous',
    //       text: inputText
    //     };
    //     this.setState({
    //       commentArray:[...this.state.commentArray, newComment]
    //     })
    //   }


    submitComment = e => {
        this.props.addComment(e, this.state.input)
        this.setState({input: 'Add a comment...'})
    }

    render(){
    return(
        <div className = 'comment-section'>
            {this.props.commentArray.map(comment=>(
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