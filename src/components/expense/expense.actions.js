import *  as ACTIONS from './expense.constants';
import expensesApi from '../../services/expenses-api';

export function loadExpense(query) {
  return {
    type: ACTIONS.EXPENSE_LOAD,
    payload: expensesApi.get(query)
  };
}

export function addExpense(expense) {
  return {
    type: ACTIONS.EXPENSE_ADD,
    payload: expensesApi.add(expense)
  };
}

export function updateExpense(expense) {
  return {
    type: ACTIONS.EXPENSE_UPDATE,
    payload: expensesApi.update(expense) 
  };
}

export function removeExpense(id) {
  return {
    type: ACTIONS.EXPENSE_REMOVE,
    payload: expensesApi.remove(id)
  };
}
