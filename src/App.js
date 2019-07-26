import React from 'react';
import './App.css';

const App = () =>(<PersonList/>)

const PersonList = () =>{
    return(
        <Person></Person>
    )
}
const Person = () =>{
    const url = "https://randomuser.me/api/portraits/thumb/men/22.jpg";

    return ( <div class="person">
    <img src={url}></img>
        <div>
            <h4>Name</h4>
            <h4>Job</h4>
        </div>
    </div>
    )
}



export default App;
