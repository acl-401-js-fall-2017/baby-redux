import { combineReducers } from 'redux';
import auth from '../auth/reducers';
import { category, categoryError, categoryLoading } from '../category/reducer';
import { expenses, expensesLoading, expensesError } from '../expense/reducer';


export default combineReducers({
  //list the functions from the reducer that is needs in this store
  auth,
  expenses,
  expensesLoading,
  expensesError,
  category,
  categoryError,
  categoryLoading
});