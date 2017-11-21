import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Categories from './category/Categories';
import logo from './logo.svg';
import './App.css';
import NewCategory from './category/newCategory';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <NavLink to ="/categories">Categories</NavLink>
            <span> </span>
            <NavLink to ="/categories/newcategory">Add Category</NavLink>
          </header>
          <Switch>
            <Route path="/categories/newcategory" component={NewCategory}/>
            <Route path="/categories" component={Categories}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
