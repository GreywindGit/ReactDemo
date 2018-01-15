import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'm a werewolf. Woof! I'm {props.name} and I'm {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" placeholder="Give Rosie a new name" onChange={props.changename} />
        </div>
    )
}

export default person;