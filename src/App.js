import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Categories from './categories/Categories';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Categories!</h1>
          </header>
          <Categories/>
        </div>
      </Router>
    );
  }
}

export default App;