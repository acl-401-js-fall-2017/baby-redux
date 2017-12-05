import { EXPENSE_LOAD, EXPENSE_ADD, EXPENSE_UPDATE, EXPENSE_REMOVE, LOADING, DONE_LOADING, ERROR } from '../utils/constants';
import expenseApi from '../services/expenses-api';

export function loadExpenses() {
  return async dispatch => {
    dispatch({ type: LOADING });

    try {
      const expenses = await expenseApi.get();
      dispatch({ type: DONE_LOADING });
      dispatch({ type: EXPENSE_LOAD, payload: expenses });
    }

    catch(err) {
      dispatch({ type: DONE_LOADING });      
      dispatch({ type: ERROR, payload: err });
      throw err;
    }

  };
}

export function addExpense(expense) {
  return async dispatch => {
    await dispatch({ 
      type: EXPENSE_ADD, 
      payload: expenseApi.add(expense)
    });
  };
}

export function updateExpense(expense) {
  return async dispatch => {
    dispatch({ type: LOADING });    
    const updated = await expenseApi.update(expense);
    dispatch({ type: DONE_LOADING });
    dispatch({
      type: EXPENSE_UPDATE,
      payload: updated
    });
  };
}

export function removeExpense(id) {
  return async dispatch => {
    dispatch({ type: LOADING });
    await expenseApi.remove(id);
    dispatch({ type: DONE_LOADING });
    dispatch({
      type: EXPENSE_REMOVE,
      payload: id
    });
  };

}