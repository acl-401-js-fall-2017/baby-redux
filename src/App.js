import React, { Component } from 'react';
import './App.css';
import Budget from './Category/budget';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Budget/>
      </div>
    );
  }
}

export default App;
