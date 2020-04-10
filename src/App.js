import React, {useState} from 'react';
import './App.css';
import UserOutput from './components/user-output/user-output';
import UserInput from './components/user-input/user-input'

function App(props) {

  const [nameState, setNameState] = useState({
    name: 'Irina'
})

const [expState, setExpState] = useState({
  exp: '1'
})



const onChangeName = (event) => {
   
    setNameState({
        name: event.target.value
    })
}

const onExpChange =(event) => {

  setExpState({
    exp: '20'

  })

}

  return (
    <div className="App">
      <UserInput name={nameState.name} changed={onChangeName} />
      <UserOutput  name ='John' exp='1'/>
      <UserOutput name = {nameState.name} exp={expState.exp} onExp ={onExpChange} />
      <UserOutput name='Gora' exp='10' />
    </div>
  );
}

export default App;