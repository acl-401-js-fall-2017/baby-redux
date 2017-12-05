import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Categories from './category/Categories';
import logo from './logo.svg';
import './App.css';
import NewCategory from './category/newCategory';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Expenses from './category/Expenses';

class App extends Component {
  render() {
    const { error, loading } = this.props;
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to Redux! (note that the title is different)</h1>
            <NavLink to ="/categories">Categories</NavLink>
            <span> </span>
            <NavLink to ="/categories/newcategory">Add Category</NavLink>
          </header>
          <div>
            {error && 
              <ErrorDiv>
                {Array.isArray(error)
                  ? <ul> error.map(err => <li>err</li>)</ul>
                  : error.TypeError? error.TypeError : error
                }
              </ErrorDiv>
            }
          </div>
          {loading &&
            <LoadingDiv>
              <img src={logo} className="App-logo" alt="logo" />
            </LoadingDiv>
          }
          <Switch>
            <Route path="/categories/newcategory" component={NewCategory}/>
            <Route path="/categories" component={Categories}/>
            <Route path="/category/:id/expenses" component={Expenses}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect( 
  state => ({ error: state.categoryError, loading: state.loading }),
  {}
)(App);

const ErrorDiv = styled.div`
color: red;
font-size: 50px;
`;

const LoadingDiv = styled.div`
`;