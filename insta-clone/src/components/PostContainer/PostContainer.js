import React from 'react';
import CommentSection from '../CommentSection/CommentSection';


const PostContainer = props =>{
    return(
        <div className='post-container'>
             <CommentSection commentArray={props.post.comments}/>
        </div>
    )
}

export default PostContainer;