import React, { useState } from 'react';

const CreatePost = (props) => {
    const [name, setName] = useState('')
    const [post, setPost] = useState(0);


    function handleSubmit(event){
        event.preventDefault();
        let newPost = {
            name: name,
            post: post
        };
        console.log(newPost)
    }







    return ( 
       <form onSubmit={handleSubmit}>
            <lable> Name </lable>
            <input type='text'  value={name} onChange={(event)=> setName(event.target.value)}/>
            <lable> Post </lable>
            <input type='text' value={post} onChange={(event)=> setPost(event.target.value)}/>
            <button type='submit'> POST </button>
       </form>
     );
}
 
export default CreatePost;