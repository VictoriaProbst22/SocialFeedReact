import React, { useState } from 'react';
import "./index.css";
const CreatePost = (props) => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [date, setDate] = useState('');


    function handleSubmit(event){
        event.preventDefault();
        let newPost = {
            name: name,
            message: message,
            date: date,
        };
        console.log(newPost);
        props.addNewPostProperty(newPost);
    }



    return ( 
       <form class="top-body" onSubmit={handleSubmit} >
        <h1 ></h1>
           <div>
                 <lable> Name </lable>
                 <input type='text'  value={name} onChange={(event)=> setName(event.target.value)}/>

            </div>
            <div>
                <lable> Post </lable>
                <input type='text' value={message} onChange={(event)=> setMessage(event.target.value)}/>
            </div>

            <div>
                <label> Date </label>
                <input type='date' value={date} onChange={(event)=> setDate(event.target.value)}/>
            </div>

            <div> 
            <button type='submit'> POST </button>
            </div>
            
       </form>
     );
}
 
export default CreatePost;