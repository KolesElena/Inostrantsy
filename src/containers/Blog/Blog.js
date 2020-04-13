import React, { useState } from 'react';

import Posts from './Posts/Posts';

import NewPost from './NewPost/NewPost';

import Login from './../../components/Login/Login';

import { Route, NavLink } from 'react-router-dom';

import './Blog.module.scss';

const Blog = () => {

   const [error, setError] = useState(false);

        
    return (
            <div className='Blog'>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/new-post'>New post</NavLink></li>
                    <li><NavLink to='/login'>Login</NavLink></li>
                </ul>
                <Route path='/' exact component={Posts} />
                <Route path='/new-post' component={NewPost} />
                <Route path='/login'  component={Login} />
            </div>
    );
};

export default Blog;