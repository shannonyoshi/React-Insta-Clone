import React from 'react';
import './CommentSection.css'
import PropTypes from 'prop-types';

class CommentSection extends React.Component {
    constructor(commentArray) {
        super(commentArray);
        this.state = {commentArray, input: ''};
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
        {/* {console.log(this.state.commentArray)} */}
            {this.props.commentArray.map(comment=>(
            <div className='comment'>
                <p className='comment-user'>{comment.username}</p>
                <p className='comment-text'>{comment.text}</p>
            </div>
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