import React from 'react';
import Post from './Post';

const PostMapper = ({array}) => {
    return ( 
    <ul class="middle-body">
        {array.map((item) => <li key={item.id}> <Post post={item}/> </li>)}
    </ul> 
    );
}
 
export default PostMapper;