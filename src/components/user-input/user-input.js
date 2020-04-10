import React from 'react';

const UserInput =(props) => {

    return (
        <div>
            <input type='text' value={props.name}  onChange={props.changed}></input>
        </div>
    );
}

export default UserInput;