import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { categories, loading, error } from './reducers';

const rootReducer = combineReducers({ 
    categories, loading, error 
});

export default rootReducer;

