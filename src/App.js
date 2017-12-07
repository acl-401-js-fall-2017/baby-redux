import React, { Component } from 'react';
import logo from './money_box1600.png';
import './App.css';
import Expense from './category/Expense';
import { connect } from 'react-redux';
import { expensesLoading, expensesError } from './category/reducer';

class App extends Component {
  render() {
    const { loading, error } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Mr Hog's Expense</h1>
        </header>
        <main>
          <Expense/>
          {loading &&
          <div className="loader">
          Loading...
          </div>
          }
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
    loading: state.expensesLoading,
    error: state.expensesError
  }),
  null
)(App);