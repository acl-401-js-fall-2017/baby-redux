import React, { Component } from 'react';
import Categories from './categories/Categories';
import './App.css';
import styled from 'styled-components';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { loading, error } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <Title>Welcome to Categories!</Title>
        </header>
        <Categories/>
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
      </div>
    );
  }
}

const Title = styled.h1`
  font-weight: bold;
  color: violet;
  font-size: 32px;
  text-align: center;
`;

export default connect(
  state => ({
    loading: state.loading,
    error: state.error
  }),
  null
) (App);