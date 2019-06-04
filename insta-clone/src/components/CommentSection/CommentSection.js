import React from 'react';
import './CommentSection.css'
import PropTypes from 'prop-types';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {input: ''};
    }
    handleChanges = e => {
        this.setState({[e.target.name]:e.target.value})
    }

    render(){
    return(
        <div className = 'comment-section'>
            {this.props.commentArray.map(comment=>(
            <div className='comment'>
            <p className='comment-user'>{comment.username}</p>
            <p className='comment-text'>{comment.text}</p>
            </div>
            ))}
            <input
                type='text'
                name='input'
                placeholder='Add a comment...'
                // onChange={this.handleChanges}
                // value={this.state.input}
                />
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