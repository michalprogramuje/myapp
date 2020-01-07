import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>No witam witam</h1>
        <p>Serdecznie</p>
        <Person name = 'franek' />
        <Person name = 'antek'>WITAM</Person>
        <Person name = 'pani ania' />
      </div>
    );
  // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi I\'m React App'))
  }
}

export default App;
