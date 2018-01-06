import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Hello World!</h1>
          <p>This is my first React app running on my laptop.</p>
          <Person />
      </div>
    );
  }
}

export default App;
