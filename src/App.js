import React, { Component } from 'react';
import { BrowserRouter as Router,
   Route,
    Switch,
     Redirect
    } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import Load from './categories/Load';
import { connect } from 'react-redux';
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

const connectedApp = connect(
  state => ({
    loading: state.loading,
    error: state.error
  }), 
  null
)(App);

export default connectedApp;