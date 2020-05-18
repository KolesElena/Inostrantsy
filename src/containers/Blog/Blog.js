import React, { useState, useEffect } from 'react';

import Post from '../../components/Post/Post';
import FullPost from './FullPost/FullPost';
import './Blog.scss';
import axios from "axios";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const Blog = () => {

   const [posts, setPosts] = useState([]);
   const [slides, setSlides] = useState({slides: true});

   const [selectedPostId, setSelectedPostId] = useState({selectedPostId: ''});

   
  
    
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
            
            console.log('Server error!');
        })}, []);

           
        const postSelectedHandler = (id) => {
            setSelectedPostId(id)
        }

        const allPosts = posts.map(post => {
            console.log(post);
            return <Post file = {post.file} username ={post.username} key = {post._id} description ={post.description} clicked ={() => {postSelectedHandler(post._id)}}/>
        });

        // const handleClick =() => {
        //     const styles = {
        //         transform:translateX(-25)
        //     }
        //     return styles;
        // }

        // const handleClick =() => {
        //     setSlides({
        //       button:!button
        //     })
        //   }
           
        
    return (
        <div className = "Container">
             
                    <FullPost id = {selectedPostId}/>
                
                  <aside className="Posts">
                <CarouselProvider 
                orientation = 'vertical'
              naturalSlideWidth={300}
              naturalSlideHeight={380}
              totalSlides={3}
            >
                
              <Slider className ="MySlider">
              <ButtonBack>&lt;</ButtonBack>
              <ButtonNext>&gt;</ButtonNext>
              {allPosts}
             
              </Slider>
             
             
            </CarouselProvider>
            </aside>
{/*               
      <div className="cards-slider">
        <div className="slider-btns">
          <button className="slider-btn btn-l" onClick={() => setSlides({})}>&lt;</button>
          <button className="slider-btn btn-r" onClick={() => setSlides({})}>&gt;</button>
        </div>
        {allPosts} */}
           
                
            </div>
    );
        

       
     
    
};

export default Blog;