import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import Response from './load/Response';
import Categories from './category/Categories';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const { loadPage, loadError } = this.props;
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to My Budget App</h1>
          </header>
          <Categories/>
          <Response/>
          {loadPage && 
            <div className="loader">Patience...</div> }
          {loadError && 
              <div className="error">
                {Array.isArray(loadError)
                  ? <ul>loadError.map(err => <li>err</li></ul>
                  : loadError.error ? loadError.error : loadError }
              </div> }
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({
    loadPage: state.loadPage,
    loadError: state.loadError
  }),
  null
)(App);
