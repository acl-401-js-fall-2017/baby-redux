import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Categories from '../category/Categories';
import './App.css';
import NewCategory from '../category/newCategory';
import { connect } from 'react-redux';
import { keyframes } from 'styled-components';
import styled from 'styled-components';
import * as spinners from 'react-spinners';
import Expenses from '../expenses/Expenses';
import Routes from './Routes';
class App extends Component {
  render() {
    const { error, loading, checkedToken } = this.props;
    return (
      <Router>
        <div>
          {checkedToken && <div>
            <AppHeader>
              <HeaderDiv>
                <h1 className="App-title">Personalized Budget Tracker</h1>
                <NavDiv>
                  <NavLink to ="/categories">Categories</NavLink>
                  <NavLink to ="/categories/newcategory">Add Category</NavLink>
                </NavDiv>
              </HeaderDiv>
            </AppHeader>
          </div>
          }
          <Routes/>          
          {error && 
            <ErrorDiv>
              {Array.isArray(error)
                ? <ul> error.map(err => <li>err</li>)</ul>
                : error.TypeError? error.TypeError : error
              }
            </ErrorDiv>
          }

          <LoadingDiv show ={loading}>
            <spinners.ClipLoader size={90} />
          </LoadingDiv>

        </div>
      </Router>
    );
  }
}

export default connect( 
  state => ({ 
    checkedToken: state.auth.checkedToken,
    error: state.categoryError,
    loading: state.loading
  }),
  {}
)(App);


const AppHeader = styled.header`
display: flex;
justify-content: center;
margin-bottom: 5%;
`;

const HeaderDiv = styled.div`
display: flex;
flex-direction: column;
`;
const ErrorDiv = styled.div`
color: red;
font-size: 50px;
`;


const NavDiv = styled.div`
> :not(:first-child) {
  margin-left: 5px;
}
`;

const LoadingDiv = styled.div`
  display: ${props => props.show ? 'flex' : 'none'}; 
  justify-content: center;
`;

const rotate360 = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`;

const HeaderIcon = styled.img`
width: 10%;
display: inline-block;
animation: ${rotate360} 2s linear infinite;
padding: 2rem 1rem;
font-size: 1.2rem;
`;