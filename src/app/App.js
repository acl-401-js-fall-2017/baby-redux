import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as spinners from 'react-spinners';
import Routes from './Routes';
import { checkForToken } from '../auth/actions';


class App extends Component {
  
  componentDidMount() {
    this.props.checkForToken();
  }

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
  { checkForToken }
)(App);


const AppHeader = styled.header`
display: flex;
justify-content: center;
margin-bottom: 5%;
`;

const HeaderDiv = styled.div`
text-align: center;
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
