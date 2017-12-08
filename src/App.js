import React, { Component } from 'react';
import logo from './money_box1600.png';
import './App.css';
import Budget from './category/budget';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Mr Hog's Budget</h1>
        </header>
        <Budget/>
      </div>
    );
  }
}

export default App;