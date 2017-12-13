import { UPDATE_CATEGORY_EXPENSES, UPDATE_SINGLE_EXPENSE } from '../expenses/constants';
import { LOADING, LOADED } from '../loader/reducer';
import { ERROR } from '../error/reducers';
import { 
  addExpense as apiAddExpense,
  removeExpense as apiRemoveExpense,
  updateExpense as apiUpdateExpense 
} from '../services/category-api';
import { renameId } from '../categories/actions';

const update = category => ({ 
  type: UPDATE_CATEGORY_EXPENSES,
  payload: renameId(category)
});

export function addExpense(expense, categoryId) {
  return async dispatch => {
    dispatch({ type: LOADING });
    try {
      const updatedCategory = await apiAddExpense(expense, categoryId);
      dispatch(update(updatedCategory));
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

export function removeExpense(expenseId, categoryId) {
  return async dispatch => {
    dispatch({ type: LOADING });
    try {
      const updatedCategory = await apiRemoveExpense(expenseId, categoryId);
      dispatch(update(updatedCategory));
    }
    catch(err) {
      dispatch({
        type: ERROR,
        payload: err.state
      });
    }
    finally {
      dispatch({ type: LOADED });
    }
  };
}

export function updateExpense(categoryId, expenseId, expenseUpdates) {
  return async dispatch => {
    dispatch({ type: LOADING });
    try {
      await apiUpdateExpense(expenseId, categoryId, expenseUpdates);
      dispatch({
        type: UPDATE_SINGLE_EXPENSE,
        payload: {
          categoryId,
          expenseId,
          expenseUpdates
        }
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