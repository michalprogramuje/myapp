import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'franek', age:28 },
      { name: 'antek', age: 29},
      { name: 'pani ania', age: 26}
    ],
    otherState: 'other value'
  });

  const switchNameHandler = () => {
    // console.log('Was clicked');
    // DONT DO THIS: personsState.persons[0].name = 'franula';
    setPersonsState({
      persons: [
        { name: 'franula', age: 28 },
        { name: 'antek', age: 29},
        { name: 'pani ania', age: 26}
      ]
    })
  }

  return (
      <div className="App">
        <h1>No witam witam</h1>
        <p>Serdecznia</p>
        <button onClick={switchNameHandler}>Switch</button>
        <Person
        name = {personsState.persons[0].name}
        age = {personsState.persons[0].age} />
        <Person
        name = {personsState.persons[1].name}
        age = {personsState.persons[1].age}>WITAM</Person>
        <Person
        name = {personsState.persons[2].name}
        age = {personsState.persons[2].age} />
      </div>
    );
  // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi I\'m React App'))
  }

export default app;
