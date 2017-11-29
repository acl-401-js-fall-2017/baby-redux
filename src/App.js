import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Category from './category/Category';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Budget_Tracker.ly</h1>
          </header>
          <Category/> 
        </div>
      </Router>
    );
  }
}

export default App;
