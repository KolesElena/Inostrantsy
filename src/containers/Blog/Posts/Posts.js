import React, { useState, useEffect } from 'react';

import Post from '../../../components/Post/Post';
import axios from "axios";
import { Link } from "react-router-dom";
// import FullPost from './../FullPost/FullPost';
// import { Route } from 'react-router-dom';

const Posts =(props)=> {

    const [posts, setPosts] = useState([]);

    const [selectedPostId, setSelectedPostId] = useState({selectedPostId: ''});
    const [error, setError] = useState(false);

    useEffect(()=>{ 
        axios.get('http://localhost:5000/exercises/')
       .then(responseData => {
           const postsAPI = responseData.data;
           const updatedPosts = postsAPI.map(post => {
               return {
                   ...post,
                   author: "Max"
               }
           })
           setPosts(updatedPosts)})
       .catch(err => {
           setError(true);
           console.log('Server error!');
       })}, []);

          
       const postSelectedHandler = (id) => {
           setSelectedPostId({selectedPostId: id})
       }

       const allPosts = posts.map(post => {
           return (
            <Link to={'/' + post._id} key ={post._id}>
                <Post file ={post.file} title = {post.description} author ={post.username} date= {post.date} duration ={post.duration} clicked ={() => {postSelectedHandler(post._id)}}/>
           </Link>
           );
       });


    return (
        <div>
        <section className="Posts">
              {allPosts}
        </section> 
         
      
        </div>
    );


return <p>Someting went wrong!</p>

}
        

export default Posts;