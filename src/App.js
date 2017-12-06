import React, { Component } from 'react';
import Categories from './categories/Categories';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Categories!</h1>
        </header>
        <Categories/>
      </div>
    );
  }
}

export default App;