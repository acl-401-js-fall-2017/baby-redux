import React, { PureComponent } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Credentials from './Credentials';
import {signup signin } from './actions';

class Auth extends PureComponent { 

  render(){
    return (
      <div>
        <Switch>
          <Route path="/auth/signin" component ={() => (
            <div>
              <p><Link to="/auth/signup"> Sign Up </Link> </p>
              <Credentials action ="Sign In" submit={signin}/>
            </div>
          )}/>
          <Route path="/auth/signup" render={() => (
            <div>
              <p><Link to="/auth/signup">Sign In</Link></p>
              <Credentials action ="Sign In" submit={signin}/>
            </div>
          )}/>
        </Switch>
        {error && <div> {error} </div>}
      </div>
    );
  }
}

export default connect(
  state => ({ error: state.auth.error, user: state.auth.user }),
  { signup, signin }
)(Auth);

