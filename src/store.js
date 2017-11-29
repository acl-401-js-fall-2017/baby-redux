import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import category from './category/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  category,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;