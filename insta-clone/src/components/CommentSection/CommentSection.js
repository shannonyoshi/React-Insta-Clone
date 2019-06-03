import React from 'react';

const CommentSection = props =>{
    return(
        <div className = 'comment-section'>
            {props.commentArray.map(comment=>(
            <div className='comment'>
            <p>{comment.username}</p>
            <p>{comment.text}</p>
            </div>
            ))}
        </div>
    )
    
}


export default CommentSection