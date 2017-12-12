import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import categories from './categories/reducers';
import loading from './loader/reducer';
import error from './error/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  categories,
  loading,
  error
});

export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

