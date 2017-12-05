import * as actions from '../category/constants';
import expenseApi from '../services/expenses.api';


export function loadExpenses(categoryId) {
  return {
    type: actions.EXPENSE_LOAD,
    payload: expenseApi.getAll(categoryId)
  };
}

export function addExpense(categoryId, payload) {
  console.log('category id: ',categoryId);
  console.log('payload',payload);
  return {
    type: actions.EXPENSE_ADD,
    payload: expenseApi.add(payload)
  };
}

// export function addExpense({ name, cost }) {

//   return async dispatch => {
//     // const { name, cost } = expense;
//     const expenses = await expenseApi.add({ name, cost });
//     dispatch({
//       type: actions.EXPENSE_ADD,
//       payload: expenses
//     });
//   };
// }


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
