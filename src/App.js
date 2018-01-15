import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
      wolves : [
        { name: "Cassira", age: "5" },
        { name: "Aldway", age: "11" },
        { name: "Rose", age: "1" }
      ]
  };
  render() {
    return (
      <div className="App">
          <h1>Hello World!</h1>
          <p>This is my first React app running on my laptop.</p>
          <button>Switch Wolf</button>
          <Person name={this.state.wolves[0].name} age={this.state.wolves[0].age}>I love full moons!</Person>
          <Person name={this.state.wolves[1].name} age={this.state.wolves[1].age}>I'm quite happy and peaceful.</Person>
          <Person name={this.state.wolves[2].name} age={this.state.wolves[2].age}>I'm just a puppy yet :)</Person>
      </div>
    );
  }
}

export default App;
