import React, { useState } from 'react';

const CreatePost = (props) => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');


    function handleSubmit(event){
        event.preventDefault();
        let newPost = {
            name: name,
            message: message,
        };
        console.log(newPost);
        props.addNewPostProperty(newPost);
    }



    return ( 
       <form onSubmit={handleSubmit}>
            <lable> Name </lable>
            <input type='text'  value={name} onChange={(event)=> setName(event.target.value)}/>
            <lable> Post </lable>
            <input type='text' value={message} onChange={(event)=> setMessage(event.target.value)}/>
            <button type='submit'> POST </button>
       </form>
     );
}
 
export default CreatePost;