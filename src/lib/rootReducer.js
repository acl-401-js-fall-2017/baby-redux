import { combineReducers } from 'redux';
import  categories  from '../category/reducer';
import expenses from '../expense/reducer';
import { loading, error } from '../app/reducer';
// import { user, token, errorAuth, checkedToken } from '../auth/reducer';

const rootReducer =  combineReducers({
  // user,
  // token,
  // errorAuth,
  // checkedToken,
  categories,
  expenses,
  loading,
  error
});

export default rootReducer;