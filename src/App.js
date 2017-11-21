import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Categories from './category/Categories';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>

        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to My Budget App</h1>
          </header>
          <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Router>
    );
  }
}

export default App;
