import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Auth from '../auth/Auth';
import PrivateRoute from './PrivateRoute';
import Category from '../category/Categories';
import NewCategory from '../category/newCategory';
import App from '../app/App';
import Expenses from '../expenses/Expenses';

export default () => (
  <Switch>
    <Route path="/auth" render={() => <Auth />} />;
    <PrivateRoute exact path="/" Component={Category} />;
    <PrivateRoute exact path="/categories" Component={Category}/>;
    <PrivateRoute exact path ="/category/:id/expenses" render={({ match }) => <Expenses id={match.params.id} />} />
    <PrivateRoute exact path="/categories/newcategory" Component={NewCategory} />
    <Redirect to="/"/>
  </Switch>
);