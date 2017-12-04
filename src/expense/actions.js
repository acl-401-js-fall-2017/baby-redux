import * as actions from '../category/constants';
import expenseApi from '../services/expenses.api';


//TODO: Need to figure out what to do with categoryId and expenseId
export function loadExpenses() {

  return async dispatch => {
    const expenses = await expenseApi.get(categoryId, expenseId);

    dispatch({
      type: actions.EXPENSE_LOAD,
      payload: expenses
    });
  };
}

export function addExpense(categoryId, expense) {

  return async dispatch => {
    const { name, cost } = expense;
    const expenses = await expenseApi.add({ name, cost });
    dispatch({
      type: actions.EXPENSE_ADD,
      payload: expenses
    });
  };
}

export function removeExpense(categoryId, expenseId) {

  return async dispatch => {
    const expense = await expenseApi.remove(expenseId);
    if(expense.removed) {
      dispatch({
        type: actions.EXPENSE_REMOVE,
        payload: { expenseId }
      });
    }
  };
}

export function updateExpense(categoryId, expense) {

  return async dispatch => {
    const updatedExpense = await expenseApi.update(expense);
    dispatch({
      type: actions.EXPENSE_UPDATE,
      payload: updatedExpense
    });
  };
}
