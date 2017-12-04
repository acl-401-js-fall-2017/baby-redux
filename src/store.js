import { createStore, applyMiddleware, compose, combineReducers, } from 'redux';
import { categories , error, loading }  from './category/reducer';
import thunk from 'redux-thunk';
import promiseMiddlewear from './utils/promiseMiddlewear';

const rootReducer = combineReducers({
  categories,
  error,
  loading
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