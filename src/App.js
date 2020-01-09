import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'franek', age:28 },
      { name: 'antek', age: 29},
      { name: 'pani ania', age: 26}
    ]
  };
  otherState = 'otherValue';
  switchNameHandler = () => {
    // console.log('Was clicked');
    // DONT DO THIS: this.state.persons[0].name = 'franula';
    this.setState({
      persons: [
        { name: 'franula', age: 28 },
        { name: 'antek', age: 29},
        { name: 'pani ania', age: 26}
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>No witam witam</h1>
        <p>Serdecznia</p>
        <button onClick={this.switchNameHandler}>Switch</button>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} />
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}>WITAM</Person>
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age} />
      </div>
    );
  // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi I\'m React App'))
  }
}

export default App;
