import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
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
            <Link to ="/categories"> Categories</Link>
            <Link to ="/categories/newcategory"> addNewCategory</Link>
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
