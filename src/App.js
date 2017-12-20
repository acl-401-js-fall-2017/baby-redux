import React, { Component } from 'react';
import Expense from './expenses/expense';
import Category from './categories/category';
import Home from './components/home';
import About from './components/about';
import Auth from './auth/Auth';
import Footer from './components/footer';
import { 
  BrowserRouter as Router, 
  Route, Switch, Redirect, 
  Link  } from 'react-router-dom';
import './style/mystyles.css';
import { connect } from 'react-redux';
import { signout } from './auth/actions';


class App extends Component {
  render() {
    const { user, signout } = this.props;
    return (
      <Router>
        <div>
          <div className="navbar is-warning">
            <Link className="navbar-item" to="/">Home</Link>
            <Link className="navbar-item" to="/about">About</Link>
            <div className="navbar-end">
              { user 
                ? <Link className="navbar-item" to="/" onClick={signout}>Logout</Link>
                : <Link className="navbar-item" to="auth/signin">Login</Link>
              }
            </div>
          </div>
          <Switch>
            <Route exact path="/" render={() => <Home/>}/>
            <Route exact path="/about" render={() => <About/>}/>
            <Route path="/auth" render={() => <Auth/>}/>
            <Route exact path="/categories" component={Category}/>
            <Route  path="/categories/:id" render={({ match }) => <Expense id={match.params.id}/>}/>;
            <Redirect to="/"/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({ user: state.auth.user }),
  { signout }
)(App);
