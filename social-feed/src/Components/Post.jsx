import React, { useState} from 'react';

const Post = ({post}) => {

    const [like, setLike]= useState(false);
    const [dislike, setDislike] = useState(false);

    function likeButton(event){
        //onClick = !disLike
    }

    function disLikeButton(event){
       //onClick = !like
    }




    return ( 
        <div>
            <h3> {post.name}</h3>
            <p> {post.message}</p>
            <button>Like</button>
            <button>Dislike</button>
        </div>
     );
}
 
export default Post;



//WITHIN THE POST COMPONENT CREATE 2 SEPERATE FUNCITONS FOR "LIKE" AND "DISLIKE" WHEN CLICKED. 
//BIND THESE FUNCTIONS TO THERE RESPECTIVE BUTTONS "OnCLICK" EVENT.
//"onChange Event is run whenever we change a value inside of an input. true=>false, slider, dropdown// onChange={()=>setLike/setDislike(event.target.value)}}// "
//>"event.preventDefault(): prevents browswer from refreshing, but refreshes internally."
//