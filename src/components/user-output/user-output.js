import React from 'react';


const UserOutput =(props) => {

    return (
        <div>
            <p onClick={props.onExp}>Hello! I am  {props.name}. I am the {props.exp}st time on this site</p>
            <button onClick={props.onExp}>Change exp</button>
        </div>
    );
}

export default UserOutput;