import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import logo from '../../images/money_box1600.png';
import Nav from './Nav';
import SignUp from '../auth/SignUp';
import SignIn from '../auth/SignIn';
import Category from '../category/Category';
import Expense from '../expense/Expense';
// import { expensesLoading, expensesError } from '../category/reducer';
// import PrivateRoute from './PrivateRoute';
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
            <Nav />
          </header>
          <main>
            <Switch>
              <Route exact path="/" component={Home} />} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/signin" component={SignIn} />
              {/* <Route path="/auth" render={() => <Auth />} /> */}
              {/* <PrivateRoute exact path="/" component={Categories} /> */}
              <Route exact path="/categories" component={Category} />} />
              {/* <PrivateRoute path="/categories/:id" render={({ match }) => <CategoryDetail id={match.params.id} />} /> */}
              <Route exact path="/categories/:id" component={Expense} />} />
              <Redirect to="/" />
            </Switch>  
            {loading &&
          <div className="loader">Loading...</div>
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
  })
)(App);