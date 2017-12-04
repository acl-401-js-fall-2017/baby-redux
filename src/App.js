import React, { Component } from 'react';
import './App.css';
import Expense from './expenses/expense';
import Category from './categories/category';
import { 
  BrowserRouter as Router, 
  Route, Switch, Redirect, 
  Link  } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="topNav">
            <Link className="nav" to="/">Home</Link>
            <span> </span>
            <Link className="nav" to="/about">About</Link>
            <span> </span>
            <Link className="nav" to="/categories">Expense Categories</Link>
          </div>
          <Switch>
            <Route exact path="/categories" component={Category}/>
            <Route  path="/categories/:id" component={Expense}/>
            <Redirect to="/"/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
