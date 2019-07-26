import React from 'react';
import './App.css';

const App = () =>(<PersonList/>)

const PersonList = () =>{
    const people = [
    {
      img:22,
      name:'John',
      job:'Developer'
    },
    {
      img:34,
      name:'Bob',
      job:'Designer'
    },
    {
      img:56,
      name:'Peter',
      job:'Artist'
    },
  ];
    return ( <section>
        <Person person={people[0]}/>;
        <Person person={people[1]}>
            Hi this is a test text.
        </Person>;
        <Person person={people[2]}/>;
    </section>
    )
}
const Person = (props) =>{
    const {img,name,job} = props.person;
    const {children} = props;
    const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;

    return ( <div class="person">
    <img src={url}></img>
        <div>
            <h4>{name}</h4>
            <h4>{job}</h4>
            {children} 
        </div>
    </div>
    )
}



export default App;
