import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import Categories from './category/Categories';
import LoadResponse from './load/LoadResponse';


class App extends Component {
  render() {
    const { loading, error } = this.props;

    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Categories/>
          <footer>
            <LoadResponse/>
            {loading && 
            <div>
              Loading...
            </div>
            }
            {error &&
            <div>
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

// export default App;