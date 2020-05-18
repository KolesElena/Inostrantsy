import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const EditExercise = (props) => {

  let count = 1;

    const [username, setUsername] = useState({username: ''});
    const [description, setDescription] = useState({description: ''});
    const [file, setFile] = useState({file: null});
    const [duration, setDuration] = useState({duration: ''});
    const [date, setDate] = useState({date: new Date()});
    const [users, setUsers] = useState({users: []});

  useEffect(() => {
    axios.get('http://localhost:5000/exercises/'+props.match.params.id)
      .then(response => {
        setUsername({username: response.data.username });
        setDescription({description: response.data.description});
        setFile({file: response.data.file});
        setDuration({duration: response.data.duration});
        setDate({date: new Date(response.data.date)});
      })
      .catch(function (error) {
        console.log(error);
      })
    }, []);

    useEffect(() => {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          setUsers({
            users: response.data.map(user => user.username),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })
    }, []);


  const onChangeUsername = (e) => {
    setUsername({
      username: e.target.value
    })
  }

  const onChangeDescription =(e)  => {
    setDescription({
      description: e.target.value
    })
  }

  const onChangeDuration = (e) => {
    setDuration({
      duration: e.target.value
    })
  }


  const onChangeDate = (date) => {
    setDate({
      date: date
    })
  }

  const fileSelectedHandler = (event) => {
    setFile({file: event.target.files[0]});
    console.log(event.target.files[0])
  }
    
  
  const onSubmit =(e) => {
    e.preventDefault();

    const exercise = {
      username: username,
      description: description,
      file: file,
      duration: duration,
      mid: count++,
      date: date
    }

    console.log(exercise);

    axios.post('http://localhost:5000/exercises/update/' + props.match.params.id, exercise)
      .then(res => console.log(res.data));

    // window.location = '/admin';
  }

  let textInput = null;

const setTextInputRef = (element) => {
      textInput = element;
    };

    return (
    <div>
      <h3>Edit Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <select ref={setTextInputRef}
              required
              className="form-control"
              value={username.username}
              onChange={onChangeUsername}>
              {
                users.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={description.description}
              onChange={onChangeDescription}
              />
        </div>
        <div>
          <input type="file" onChange = {fileSelectedHandler}></input>
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input 
              type="text" 
              className="form-control"
              value={duration.duration}
              onChange={onChangeDuration}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={date.date}
              onChange={onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
}

export default EditExercise;