import * as actions from '../category/constants';
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

// TODO: This function is not working at all right now. I have access to categoryId and expenseId but cannot
// seem to get the expenseId to be applied to the path. 
export function updateExpense(categoryId, expenseId, data) {

  return {
    type: actions.EXPENSE_UPDATE,
    payload: expenseApi.update(categoryId, expenseId, data)
  };
}

// export function updateExpense(categoryId, expense) {

//   return async dispatch => {
//     const updatedExpense = await expenseApi.update(expense);
//     dispatch({
//       type: actions.EXPENSE_UPDATE,
//       payload: updatedExpense
//     });
//   };
// }
