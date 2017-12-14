import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import categories, { loading, error } from './categories/reducer';

const rootReducer = combineReducers({
  categories,
  loading,
  error
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer, 
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;