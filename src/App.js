import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

const StyledButton = styled.button`
background-color: s{props => props.alt ? 'red' : 'green'};
color: white;
border: 1px solid blue;
padding: 8px;
font: inherit;
cursor: pointer;

&:hover {
  background-color: lightgreen;
  color: black;
  `;

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

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
        {this.state.persons.map( (person, index) => {
          return <Person
            name = {person.name}
            age = {person.age}
            click = {() => this.deletePersonHandler(index)}
            key = {person.id}
            changed = {(event) => this.nameChangedHandler(event, person.id)} />
        })}
        </div>
      );
    }

    let classes = [];
    if (this.state.persons.length <=2) {
      classes.push('red');
    }
    if (this.state.persons.length <=1) {
      classes.push('bold');
    }


    return (
      <div className="App">
        <h1>No witam witam</h1>
        <p className={classes.join(' ')}>Serdecznie</p>
        <StyledButton
        alt = {this.state.showPersons}
        onClick={this.togglePersonsHandler}>Show/Hide</StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
