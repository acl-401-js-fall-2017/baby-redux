import { combineReducers } from 'redux';
// import auth from '../components/auth/auth.reducers';
import { categories, categoriesError, categoriesLoading } from '../components/category/category.reducers';
import { expenses, expensesLoading, expensesError } from '../components/expense/expense.reducers';


export default combineReducers({
  //list the functions from the reducer that is needs in this store
  // auth,
  expenses,
  expensesLoading,
  expensesError,
  categories,
  categoriesError,
  categoriesLoading
});