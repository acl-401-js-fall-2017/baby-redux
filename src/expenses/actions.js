import { EXPENSE_ADD } from '../expenses/constants';
import { LOADING, LOADED } from '../loader/reducer';
import { ERROR } from '../error/reducers';
import { addExpense as apiAddExpense } from '../services/category-api';
import { renameId } from '../categories/actions';

export function addExpense(expense, categoryId) {
  return async dispatch => {
    dispatch({ type: LOADING });
    try {
      const updatedCategory = await apiAddExpense(expense, categoryId);
      console.log(updatedCategory);
      dispatch({ 
        type: EXPENSE_ADD,
        payload: renameId(updatedCategory)
      });
    }
    catch(err) {
      dispatch({
        type: ERROR,
        payload: err.stack
      });
    }
    finally {
      dispatch({ type: LOADED });
    }
  };
}