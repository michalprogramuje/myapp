import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'franek', age:28 },
      { id: '2', name: 'antek', age: 29},
      { id: '3', name: 'pani ania', age: 26}
    ],
    otherState : 'otherValue',
    showPersons : false
  };

  nameChangedHandler = (event , id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id ===id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState ( {persons:persons})
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
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
            click = {() => this.deletePersonHandler(index)}
            key = {persona.id}
            changed = {(() => this.nameChangedHandler(event, person.id)}) />
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
