import React, { useState, useEffect } from 'react';

import Post from '../../../components/Post/Post';
import axios from "axios";

const Posts =()=> {

    const [posts, setPosts] = useState([]);

    const [selectedPostId, setSelectedPostId] = useState('null');
    const [error, setError] = useState(false);

    useEffect(()=>{ 
        axios.get('https://jsonplaceholder.typicode.com/posts/')
       .then(responseData => {
           const postsAPI = responseData.data.slice(0,4);
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
           setSelectedPostId(id)
       }

       const allPosts = posts.map(post => {
           return <Post title ={post.title} key ={post.id} author ={post.author} clicked ={() => {postSelectedHandler(post.id)}}/>
       });

if (!error) {
    return (
        <section className="Posts">
              {allPosts}
        </section> 
    );
}

return <p>Someting went wrong!</p>

}
        

export default Posts;