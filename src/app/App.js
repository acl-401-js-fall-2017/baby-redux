import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import Categories from '../category/Categories';
// import LoadResponse from '../load/LoadResponse';


class App extends Component {
  render() {
    const { loading, error } = this.props;

    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Budget Tracker</h1>
          </header>
          <Categories/>
          <footer>
            {/* <LoadResponse/> */}
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
          </footer>
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({
    loading: state.loading,
    error: state.error
  }),
  null
)(App);