import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from '../home/Home';
import Auth from '../auth/Auth';
import Categories from '../category/Categories';

import PrivateRoute from './PrivateRoute';

export default () => (
  <Switch>
    <Route exact path="/" render={() => <Home/>}/>;
    <Route path="auth" render={() => <Auth/>}/>;
    <PrivateRoute exact path="/categories" component={Categories}/>;
    <PrivateRoute path="/categories/:id" render={({ match }) => <Categories id={match.params.id}/>}/>;
    <Redirect to="/"/>
  </Switch>
);