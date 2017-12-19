import React, { PureComponent } from 'react';
import { Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signin, signup } from './actions';
import styled from 'styled-components';
import Credentials from './Credentials';

class Auth extends PureComponent {
  render() {
    const redirect = this.props.location.state
      ? this.props.location.state.from
      : '/';

    if (this.props.user) return <Redirect to={redirect} />;

    return (
      <StyledDiv>
        <h1>Welcome!</h1>
        <Link to="/auth/signin"> Sign In Here </Link> if you already
          have an account with us or <Link to="/auth/signup">
            Sign Up here
        </Link>
        <Switch>
          <Route
            path="/auth/signin"
            component={() => (
              <Credentials action="Sign In" submit={this.props.signin} />
            )}
          />
          <Route
            path="/auth/signup"
            render={() => (
              <Credentials
                action="Sign Up"
                submit={this.props.signup}
                allowName={true}
              />
            )}
          />
        </Switch>
        {this.props.error && <Error>{this.props.error}</Error>}
      </StyledDiv>
    );
  }
}

export default withRouter(
  connect(
    ({ auth }) => ({
      error: auth.error,
      user: auth.user
    }),
    { signup, signin }
  )(Auth)
);

const Error = styled.pre`
  color: red;
`;

const StyledDiv = styled.div`
  text-align: center;
  margin: auto;
  width: 50%;
`;