import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import categories from './categories/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  categories,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

