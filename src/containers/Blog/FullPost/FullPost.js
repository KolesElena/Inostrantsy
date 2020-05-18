import React, { useState, useEffect} from 'react';

import './FullPost.css';
import axios from "axios";

const FullPost = (props) => {
    const [loadedPost, setLoadedPost] = useState('null');
    
    useEffect(()=>{ 
        if (props.id) {
            if (( loadedPost._id !== props.id) || (loadedPost._id ==="null")) {
        axios.get('http://localhost:5000/exercises/'+ props.id).then(response => {
        setLoadedPost(response.data);
    });}}});

   

    let post = <p>Please select a Post!</p>;
        if (props.id) {
            post = <p>LOADING!</p>;
        }
       
        if (loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{loadedPost.username}</h1>
                    <p>{loadedPost.description}</p>
                </div>
    
            );
    return post;  
            }                   
}

export default FullPost;