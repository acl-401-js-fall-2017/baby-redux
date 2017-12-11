import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer  from './rootReducer';
import promiseMiddleware from './promise-middleware';

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;
// const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk, promiseMiddleware)
)
);

export default store;

