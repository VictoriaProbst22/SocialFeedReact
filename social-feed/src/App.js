import React, {useState} from 'react';
import CreatePost from './Components/CreatePost';
import NavBar from './Components/NavBar';
import PostMapper from './Components/PostMapper';

function App() {

  const [posts, setPosts] = useState([
    {
      name:"Pierson",
      message: "I like Pizza for dinner!",
      isLiked: false,
      isDisliked: false,
      id:1,
      date: '1-1-2022'
    },
    {
      name:"Natasha",
      message: "I like Chinese for dinner!",
      date: '2022-01-01',
      isLiked: false,
      isDisliked: false,
      id:2,
      
    },
    {
      name:"Jake",
      message: "I like Pho for dinner!",
      isLiked: false,
      isDisliked: false,
      id: 3,
    }
  ])


  function addNewPost(post){
    let tempPosts = [post, ...posts];
    setPosts(tempPosts);
    console.log(tempPosts);
  }

  return (
    <div>
      <NavBar />
      <CreatePost addNewPostProperty={addNewPost} />
      <PostMapper array={posts}/>
      
    
    </div>
  );
}

export default App;
