import * as actions from '../app/constants';
import expenseApi from '../services/expenses.api';


export function loadExpenses(categoryId) {
  return {
    type: actions.EXPENSE_LOAD,
    payload: expenseApi.getAll(categoryId)
  };
}

export function addExpense(categoryId, data) {

  return {
    type: actions.EXPENSE_ADD,
    payload: expenseApi.add(categoryId, data)
  };
}

// TODO: remove function is not updating the DOM but is removing from server
// Possible solution is to checkout categories reducer and see how the payload is being handled. 
export function removeExpense(categoryId, expenseId) {

  return {
    type: actions.EXPENSE_REMOVE,
    payload: expenseApi.remove(categoryId, expenseId)
  };
}

export function updateExpense(categoryId, expenseId, data) {

  return {
    type: actions.EXPENSE_UPDATE,
    payload: expenseApi.update(categoryId, expenseId, data)
  };
}
