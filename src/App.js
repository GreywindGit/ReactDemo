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
  }

  switchWolfHandler = (newAge) => {
      this.setState( {
        wolves: [
          { name: "Cassira", age: newAge },
          { name: "Aldway", age: "12"},
          { name: "Rosie", age: "2"}
        ]
      });
  }

  /*
    Two ways of passing arguments of methods: this.functionName.bind(this, newValue) OR
    () => this.functionName(newValue). By binding it, the second "this" keyword refers 
    to the object that the function refers to!
  */
  render() {
    return (
      <div className="App">
          <h1>Hello World!</h1>
          <p>This is my first React app running on my laptop.</p>
          <button onClick={() => this.switchWolfHandler("17")}>Switch Wolf</button>
          <Person 
            name={this.state.wolves[0].name} 
            age={this.state.wolves[0].age}>I love full moons!</Person>
          <Person 
            name={this.state.wolves[1].name} 
            age={this.state.wolves[1].age}
            click={this.switchWolfHandler.bind(this, "15")}>I'm quite happy and peaceful.</Person>
          <Person 
            name={this.state.wolves[2].name} 
            age={this.state.wolves[2].age}
            click={this.switchWolfHandler.bind(this, "19")}>I'm just a puppy yet :)</Person>
      </div>
    );
  }
}

export default App;
