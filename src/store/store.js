import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { categoryReducer, categoryLoad, categoryError } from '../category/reducer';

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;
// const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const rootReducer = combineReducers({ categoryReducer, categoryLoad, categoryError });

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
)
);

export default store;

