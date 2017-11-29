import { createStore, applyMiddleware, compose, combineReducers, } from 'redux';
import { categories , categoryError }  from './category/reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  categories,
  categoryError
});

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnchancers(
    applyMiddleware(thunk)
  )
);

export default store;