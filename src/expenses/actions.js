import * as actions from './constants';
import expensesApi from '../services/expenses-api';

export function loadExpenses(id) {
  return async dispatch => {
    try {
      // action is starting, 
      // tell the store we are loading...
      dispatch({ type : actions.LOADING });
      // talk to server via api...
      const { expenses } = await expensesApi.get(id);
      // dispatch load action when done...
      dispatch({ type: actions.EXPENSE_LOAD, payload: expenses });
    }
    catch(err) {
      dispatch({
        type: actions.EXPENSE_ERROR, 
        payload: err
      });
    }
  };
}

export function addExpense(expense) {
  return async dispatch => {
    try {
      const saved = await expensesApi.add(expense);
      dispatch({
        type: actions.EXPENSE_ADD,
        payload: saved
      });
    }
    catch(err) {
      dispatch({
        type: actions.EXPENSE_ERROR,
        payload: err
      });
    }
  };
}

export function removeExpense(id) {
  return async dispatch =>{
    try {
      const removed = await expensesApi.remove(id);
      dispatch({
        type: actions.EXPENSE_REMOVE,
        payload: removed
      });
    }
    catch(err) {
      dispatch({
        type: actions.EXPENSE_ERROR,
        payload: err
      });
    }
  };
}

export function updateExpense(expense) {
  return async dispatch => {
    try {
      const updated= await expensesApi.update(expense);
      dispatch({
        type: actions.EXPENSE_UPDATE,
        payload: updated
      });
    }
    catch(err) {
      dispatch({
        type: actions.EXPENSE_ERROR,
        payload: err
      });
    }
  };
}
