import { combineReducers } from 'redux';
import { categories, categoriesError, categoriesLoading } from '../components/category/category.reducers';
import { expenses, expensesLoading, expensesError } from '../components/expense/expense.reducers';


export default combineReducers({
  expenses,
  expensesLoading,
  expensesError,
  categories,
  categoriesError,
  categoriesLoading
});