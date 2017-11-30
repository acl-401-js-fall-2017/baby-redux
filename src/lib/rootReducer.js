import { combineReducers } from 'redux';
import  categories  from '../category/reducer';
import { response, loading, error } from '../load/reducer';

const rootReducer =  combineReducers({ 
  categories, response, loading, error
});

export default rootReducer;