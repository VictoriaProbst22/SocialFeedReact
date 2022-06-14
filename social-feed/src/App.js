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
    },
    {
      name:"Natasha",
      message: "I like Chinese for dinner!",
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

  return (
    <div>
      <NavBar />
      <CreatePost />
      <PostMapper array={posts}/>
    
    </div>
  );
}

export default App;
