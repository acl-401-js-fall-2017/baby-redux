import { EXPENSE_LOAD, EXPENSE_ADD, EXPENSE_UPDATE, EXPENSE_REMOVE } from '../utils/constants';
import expenseApi from '../services/expenses-api';

export function loadExpenses() {
  return async dispatch => {
    await dispatch({
      type: EXPENSE_LOAD,
      payload: expenseApi.get()
    });
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
    await dispatch({
      type: EXPENSE_UPDATE,
      payload: expenseApi.update(expense)
    });
  };
}

export function removeExpense(id) {
  return async dispatch => {
    await dispatch({
      type: EXPENSE_REMOVE,
      payload: expenseApi.remove(id)
    });
  };
}