import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { categories, loading, error } from './reducers';
import { expenses } from '../expenses/reducers';

const rootReducer = combineReducers({ 
    categories, loading, error, expenses
});

export default rootReducer;

