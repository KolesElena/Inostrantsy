import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post" onClick ={props.clicked}>
        <h1>{props.description}</h1>
        <div className="Info">
<img className="File" src={props.file}/>       
<div className="Author">{props.username}</div>
<div className="Date">{props.date}</div>
<div className="Duration">{props.duration}</div>

        </div>
    </article>
);

export default post;