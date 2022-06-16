import React from 'react';
import CustomButton from './CustomBotton/CustomButton';

const Post = ({post}) => {

    //const [like, setLike]= useState(true);
    //const [dislike, setDislike] = useState('');
//
    //function likeButton(event){                                     //With LIKE BUTTON functionality, it is hardcoded as False Boolean
    //    event.preventDefault();                                     // I need to flip that Boolean to True and print TRUE to the console.  
    //    let like = false;                                           //update the array to show the updated boolean
    //    if (!like === post.isLiked) {
    //        return true;
    //    }
    //    console.log(dislike);
    //   
    //    
    //}
//
   //function disLikeButton(event){
    //event.preventDefault();
    //   let dislike = false;
    //if(!dislike === post.isDisliked){
    //        return true;
    //    }
    //    console.log(like);
    //}

    //onClick = !disLike



    return ( 
        <div>
            <h3> {post.name}</h3>
            <p> {post.message}</p>
            <CustomButton message= "Like"/>
            <CustomButton message="Dislike"/>
        </div>
     );
}
 
export default Post;



//WITHIN THE POST COMPONENT CREATE 2 SEPERATE FUNCITONS FOR "LIKE" AND "DISLIKE" WHEN CLICKED. 
//BIND THESE FUNCTIONS TO THERE RESPECTIVE BUTTONS "OnCLICK" EVENT.
//"onChange Event is run whenever we change a value inside of an input. true=>false, slider, dropdown// onChange={()=>setLike/setDislike(event.target.value)}}// "
//>"event.preventDefault(): prevents browswer from refreshing, but refreshes internally."
//