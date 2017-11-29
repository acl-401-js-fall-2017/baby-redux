import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Category from './category/Category';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Category />
        </div>
      </Router>
    );
  }
}

export default App;
