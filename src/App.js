import React, { Component } from 'react';
import logo from './money_box1600.png';
import './App.css';
import Budget from './category/Budget';
import { connect } from 'react-redux';
import { budgetsLoading, budgetsError } from './category/reducer';

class App extends Component {
  render() {
    const { loading, error } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Mr Hog's Budget</h1>
        </header>
        <main>
          <Budget/>
          loading div:
          {console.log('props loading', loading)}
          {console.log('props', this.props)}
          {console.log('state', this.state)}
          {loading &&
          <div className="loader">
          Loading...
          </div>
          }
          {console.log('props error', error)}
          {error &&
          <div className="error">
            {Array.isArray(error)
              ? <ul>error.map(err => <li>err</li>)</ul>
              : error.error ? error.error : error
            }
          </div>
          }
        </main>
      </div>
    );
  }
}

export default connect(
  state => ({
    loading: state.budgetsLoading,
    error: state.budgetsError
  }),
  null
)(App);