import React from 'react';
import './App.css';

const App = () =>(<PersonList/>)

const PersonList = () =>{
    return(
        <Person></Person>
    )
}
const Person = () =>{
    return <div>I am person component</div>
}


export default App;
