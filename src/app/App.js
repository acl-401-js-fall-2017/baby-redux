import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { ErrorStyled, LoadingStyled, HeaderStyled, ContainerDiv } from '../styles/styled';
import styled from 'styled-components';

import Categories from '../category/Categories';


class App extends Component {
  render() {
    const { loading, error } = this.props;

    return (
      <Router>
        <div>
          <HeaderStyled>
            <h1>Budget Tracker</h1>
          </HeaderStyled>
          <ContainerDiv>
            <div>
              <Categories/>
              <FooterStyled>
                {loading && 
            <LoadingStyled>
              Loading...
            </LoadingStyled>
                }
                {error &&
            <ErrorStyled>
              {Array.isArray(error)
                ? <ul>error.map(err => <li>err</li>)</ul>
                : error.error ? error.error : error
              }
            </ErrorStyled>
                }
              </FooterStyled>
            </div>
          </ContainerDiv>
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

const FooterStyled = styled.footer`
  position: relative;
  text-align: left;
  margin: 20px;
  height: 100px;
`;