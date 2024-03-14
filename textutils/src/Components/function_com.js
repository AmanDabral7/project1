import React from 'react';
// import './App.css';

// Function BASED COMPONENT
function Greet(props){
    return(
    <div>
        <h1>{props.heading}</h1>
        <h1>HELLO EVERYONE</h1>
        <h1>HELLO EVERYONE</h1>
        <p>Name: {props.Name}</p>
        </div>
    );
}

export default Greet;