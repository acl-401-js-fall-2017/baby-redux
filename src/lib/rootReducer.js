import { combineReducers } from 'redux';
import { category } from '../category/reducer';

const rootReducer =  combineReducers({ category });

export default rootReducer;