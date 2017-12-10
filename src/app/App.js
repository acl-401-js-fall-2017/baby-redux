import React, { Component } from 'react';
import logo from '../money_box1600.png';
import './App.css';
import Expense from '../category/Expense';
import { connect } from 'react-redux';
import { expensesLoading, expensesError } from '../category/reducer';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from '../home/Home';

class App extends Component {
  render() {
    const { loading, error } = this.props;
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Mr Hog's Expense</h1>
          </header>
          <main>
            <Switch>
              <Route exact path="/" render={() => <Home />} />;
              <Route path="/auth" render={() => <Auth />} />;
              <PrivateRoute exact path="/" component={Categories} />;
              <PrivateRoute path="/categories/:id" render={({ match }) => <CategoryDetail id={match.params.id} />} />;
              <Redirect to="/"/>
              <Expense/>
            </Switch>  
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
      </Router>
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