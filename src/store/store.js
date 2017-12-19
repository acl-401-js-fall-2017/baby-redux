import { createStore, applyMiddleware, compose, combineReducers, } from 'redux';
import { categories, }  from '../category/reducer';
import { error, loading } from '../app/reducer';
import thunk from 'redux-thunk';
import promiseMiddlewear from './promiseMiddlewear';
import auth from '../auth/reducer';

const rootReducer = combineReducers({
  categories,
  error,
  loading,
  auth
});

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnchancers(
    applyMiddleware(
      thunk,
      promiseMiddlewear)
  )
);

export default store;