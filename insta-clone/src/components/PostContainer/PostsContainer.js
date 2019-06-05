import React from 'react';
import Post from './Post';

import './PostContainer.css'


const PostsContainer = props =>{
    return(
        <div className='posts-container'>
            {props.posts.map(item=>
                <Post 
                post={item} 
                key={item.id}
            />)}
        </div>
    )
}

export default PostsContainer;
