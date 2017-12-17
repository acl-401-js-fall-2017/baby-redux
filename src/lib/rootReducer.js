import { combineReducers } from 'redux';
import  categories  from '../category/reducer';
import expenses from '../expense/reducer';
import { loading, error } from '../app/reducer';

const rootReducer =  combineReducers({ 
  categories, expenses, loading, error
});

export default rootReducer;