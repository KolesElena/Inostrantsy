import React, { useState } from 'react';

import './NewPost.css';
import axios from "axios";

const NewPost =()=> {
    const [data, setData] = useState({title: '', content: 'Some content there',author:'Manuel'});

    const postDataHandler =() => {
        
        axios.post('https://jsonplaceholder.typicode.com/posts/', data).then(response=> {

            console.log(response);
        });
    }

        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={data.title} onChange={(event) => setData({title: event.target.value, content:data.content, author:data.author})} />
                <label>Content</label>
                <textarea rows="4"  placeholder={data.content} onChange={(event) => setData({title:data.title, content: event.target.value, author:data.author})} />
                <label>Author</label>
                <select value={data.author} onChange={(event) => setData({title:data.title, content:data.content, author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>  
                </select>
                <button onClick={postDataHandler}>Add Post</button>
            </div>
        );
}

export default NewPost;