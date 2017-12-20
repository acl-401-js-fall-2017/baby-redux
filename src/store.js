import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import auth from './auth/reducer';
import { expensesActions , expensesLoading, expensesError } from './expenses/reducer';
import { categoriesActions , categoriesLoading, categoriesError } from './categories/reducer';

const rootReducer = combineReducers({
  auth,
  expensesActions,
  expensesLoading,
  expensesError,
  categoriesActions,
  categoriesLoading,
  categoriesError
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer, 
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;