import React from 'react';
import { Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signin, signup } from './auth.actions';
import styled from 'styled-components';
import Credentials from './Credentials';

const CenteredDiv = styled.div`
    text-align: center;
`;

const Error = styled.pre`
    color: red;
`;

function Auth({ user, signin, signup, error, location }) {
  const redirect = location.state ? location.state.from : '/';

  if(user) return <Redirect to={redirect} />;

  return (
    <CenteredDiv>
      <Route path="/auth/signin" />
    </CenteredDiv>    
  );
}