import React from 'react';
import { Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signin, signup } from './actions';
import { CenteredDiv, AuthError } from '../styles/styled';
import Credentials from './Credentials';


function Auth({ user, signin, signup, error, location }) {
  const redirect = location.state ? location.state.from : '/';

  if(user) return <Redirect to={redirect}/>;

  return (
    <CenteredDiv>
      <Switch>
        <Route path='/auth/signin' component={() => (
          <div>
            <p> Not yet registered? <Link to="/auth/signup">Sign Up </Link></p>
            <Credentials action="Sign In" submit={signin}/>
          </div>
        )}/>
        <Route path="/auth/signup" render={() => (
          <div>
            <p>Already have an account? <Link to="/auth/signin"> Sign In </Link></p>
            <Credentials action="Sign Up" submit={signup} allowName={true}/>
          </div>
        )}/>
      </Switch>
      {error && <AuthError>{ error }</AuthError>}
    </CenteredDiv>
  );
}

export default withRouter(connect(
  ({ auth }) => ({
    error: auth.error,
    user: auth.user
  }),
  { signup, signin }
)(Auth));