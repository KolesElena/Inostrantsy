import React, { useState, useEffect} from 'react';

import './FullPost.css';
import axios from "axios";

const FullPost = (props) => {
    const [loadedPost, setLoadedPost] = useState('null');
    
    useEffect(()=>{ 
        if (props.id) {
            if (( loadedPost.id !== props.id) || (loadedPost.id === "null")) {
        axios.get('https://jsonplaceholder.typicode.com/posts/'+ props.id).then(response => {
        setLoadedPost(response.data);
    });}}});

    const deletePostHandler =() => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/'+ props.id).then(response => {
       console.log(response);
    });}

    let post = <p>Please select a Post!</p>;
        if (props.id) {
            post = <p>LOADING!</p>;
        }
       
        if (loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{loadedPost.title}</h1>
                    <p>{loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick = {deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>
    
            );
    return post;  
            }                   
}

export default FullPost;