import React, { useState , useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

const CreateExercise = () => {
 
let count = 1;

const [username, setUsername] = useState('');

const [description, setDescription] = useState('');

const [file, setFile] = useState(null);

const [filename, setFilename] = useState('Choose file');

const [uploadedFile, setUploadedFile] = useState({});

const [message, setMessage] = useState('');

const [duration, setDuration] = useState(5);

const [date, setDate] = useState(new Date());


const [users, setUsers] = useState( []);

useEffect(() => {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          setUsers(
            response.data.map(user => user.username)
          );
          setUsername(
             response.data[0].username
          );

          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      })

}, []);


  const onChangeUsername = (e) => {
    setUsername(
      e.target.value
    )
  }

  const onChangeDescription =(e) => {
    setDescription(
      e.target.value
    )
  }

  const onChangeDuration = (e)  => {
    setDuration(
      e.target.value
    )
  }

  const onChangeDate =(date) => {
    setDate(
      date
    )
  }

  const fileSelectedHandler = (event) => {
    setFile(event.target.files[0]);
    setFilename(event.target.files[0].name);
    console.log(event.target.files[0])
  }


  const onSubmit =  e => {
    e.preventDefault();

    const fd = new FormData();
    

    

    const exercise = {
      username: fd.append('username', username),
      description: fd.append('description', description),
      duration: fd.append('duration', duration),
      mid: fd.append('mid', count++),
      date: fd.append('date', date),
      file: fd.append('file', file)
    }




   
   console.log(...fd);
  //  for (var key of fd.entries()) {
  //   console.log(key[0] + ', ' + key[1])
  // }

console.log(exercise);

    axios.post('http://localhost:5000/exercises/add', fd)
    .then(res => console.log(res.data))
    .catch(err =>console.log(err))


    // window.location = '/admin';

  };

  let textInput = null;

const setTextInputRef = (element) => {
      textInput = element;
    };

    return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form encType="multipart/form-data" method="post" onSubmit={onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <select ref={setTextInputRef}
              required
              className="form-control"
              onChange={onChangeUsername}>
              {
                users.map(user => {
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
              
              className="form-control"
              value={description}
              onChange={onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input 
              type="text" 
              className="form-control"
              value={duration}
              onChange={onChangeDuration}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={date}
              onChange={onChangeDate}
            />
          </div>
        </div>
        <div>
          <input type="file" onChange = {fileSelectedHandler}></input>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
}

export default CreateExercise;
