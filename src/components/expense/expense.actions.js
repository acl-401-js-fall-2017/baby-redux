import *  as ACTIONS from './expense.constants';
import expensesApi from '../../services/expenses-api';

export function loadExpense(options) {
  return async dispatch => {
    dispatch({ type: ACTIONS.EXPENSE_LOADING });
    try {
      const expenses = await expensesApi.get(options);
      dispatch({ 
        type: ACTIONS.EXPENSE_LOAD,
        payload: expenses
      });
    }
    catch(err) {
      dispatch({
        type: ACTIONS.EXPENSE_ERROR,
        payload: err
      });
      // check below line for random error;
      throw err;
    }
  };
}

export function addExpense(expense) {
  return async dispatch => {
    try {
      const saved = await expensesApi.add(expense);
      dispatch({
        type: ACTIONS.EXPENSE_ADD,
        payload: saved
      });
    }
    catch(err) {
      dispatch({
        type: ACTIONS.EXPENSE_ERROR,
        payload: err
      });
    }
  };
}

export function updateExpense(expense) {
  return async dispatch => {
    try{
      const changed = await expensesApi.update(expense);
      dispatch({
        type: ACTIONS.EXPENSE_UPDATE,
        payload: { changed }
      });
    }
    catch (err) {
      dispatch({
        type: ACTIONS.EXPENSE_ERROR,
        payload: err
      });
    }  
  };
}

export function removeExpense(id) {
  return async dispatch => {
    try {
      const remove = await expensesApi.remove(id);
      dispatch({
        type: ACTIONS.EXPENSE_REMOVE,
        payload: remove
      });
    }
    catch (err) {
      dispatch({
        type: ACTIONS.EXPENSE_ERROR,
        payload: err
      });
    }   
  };
}
