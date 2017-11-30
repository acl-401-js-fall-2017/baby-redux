import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { budgetsActions , budgetsLoading, budgetsError } from './Category/reducer';

const rootReducer = combineReducers({
  budgetsActions,
  budgetsLoading,
  budgetsError
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer, 
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;