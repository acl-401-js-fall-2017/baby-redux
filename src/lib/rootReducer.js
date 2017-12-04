import { combineReducers } from 'redux';
import  categories  from '../category/reducer';
import { loading, error } from '../app/reducer';

const rootReducer =  combineReducers({ 
  categories, loading, error
});

export default rootReducer;