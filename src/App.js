import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'franek', age:28 },
      { name: 'antek', age: 29},
      { name: 'pani ania', age: 26}
    ],
    otherState : 'otherValue',
    showPersons : false
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'franeczula', age: 28 },
        { name: event.target.value, age: 29},
        { name: 'pani ania', age: 26}
      ]
    } )
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      curson: 'pointer'
    };

    let personas = null;

    if (this.state.showPersons) {
      personas = (
        <div>
        {this.state.persons.map( (persona, index) => {
          return <Person
            name = {persona.name}
            age = {persona.age}
            click = {() => this.deletePersonHandler(index)}/>
        })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>No witam witam</h1>
        <p>Serdecznia</p>
        <button onClick={this.togglePersonsHandler}>Show/Hide</button>
        {personas}
      </div>
    );
  // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi I\'m React App'))
  }
}

export default App;
