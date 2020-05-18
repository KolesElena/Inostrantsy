import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercises.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import Blog from "./containers/Blog/Blog";
// import FullPost from './containers/Blog/FullPost/FullPost';


import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path='/' exact component = {Blog} /> 
      <Route path='/admin' exact component = {ExercisesList} /> 
      <Route path='/edit/:id' component = {EditExercise} /> 
      <Route path='/create' component = {CreateExercise} />
      <Route path='/user' exact component = {CreateUser} />
    </Router>
  );
}

export default App;
