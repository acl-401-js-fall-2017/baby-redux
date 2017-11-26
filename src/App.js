import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Dashboard}/>>
            <Redirect to="/"/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;