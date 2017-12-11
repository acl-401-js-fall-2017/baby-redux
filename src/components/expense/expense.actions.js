import *  as ACTIONS from './expense.constants';
import expensesApi from '../../services/expenses-api';

export function loadExpense(query) {
  return async dispatch => {
    dispatch({ type: ACTIONS.EXPENSE_LOADING });
    try {
      const expense = await expensesApi.get(query);
      dispatch({ 
        type: ACTIONS.EXPENSE_LOAD,
        payload: expense
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
      const newExpense = await expensesApi.add(expense);
      dispatch({
        type: ACTIONS.EXPENSE_ADD,
        payload: newExpense
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
      const newExpense = await expensesApi.update(expense);
      dispatch({
        type: ACTIONS.EXPENSE_UPDATE,
        payload: newExpense 
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
      const expense = await expensesApi.remove(id);
      dispatch({
        type: ACTIONS.EXPENSE_REMOVE,
        payload: expense
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
