import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import categories from './categories/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  categories, 
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;
