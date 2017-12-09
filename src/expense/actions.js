import * as actions from './constants';
import expenseApi from '../services/expense.api';

export function loadExpense() {
  return dispatch => {
    dispatch({ type: actions.CATEGORY_LOAD, payload: expenseApi.get() });
  };
}

export function addExpense(category) {
  return dispatch => {
    dispatch({ type: actions.CATEGORY_ADD, payload: expenseApi.add(category) });
  };
}

export function updateExpense(id, data) {
  return dispatch => {
    dispatch({ type: actions.CATEGORY_UPDATE, payload: expenseApi.update(id, data) });
  };
}

export function removeExpense(id) {
  return dispatch => {
    dispatch({ type: actions.CATEGORY_REMOVE, payload: expenseApi.remove(id).then(() => id) });
  };
}