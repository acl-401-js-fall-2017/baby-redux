import React, { Component } from 'react';
// import './App.css';
import Expense from './expenses/expense';
import Category from './categories/category';
import Home from './components/home';
import About from './components/about';
import { 
  BrowserRouter as Router, 
  Route, Switch, Redirect, 
  Link  } from 'react-router-dom';
import 'bulma/css/bulma.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="navbar is-warning">
            <Link className="navbar-item" to="/">Home</Link>
            <Link className="navbar-item" to="/about">About</Link>
            <div className="navbar-end">
              <div className="navbar-item"><strong>Budget Tracker</strong></div>
            </div>
          </div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/categories" component={Category}/>
            <Route  path="/categories/:id" component={Expense}/>
            {/* <Redirect to="/"/> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
