import _ from 'lodash';
import * as actions from '../category/constants';
import categoriesApi from '../services/categories-api';

export function addExpense(categoryId, expense) {
  return{
    type: actions.EXPENSE_ADD,
    payload: categoriesApi.addExpense(categoryId, expense).then((expense) => ({ expense, categoryId }))
  };
}


export function removeExpense(categoryId, expenseId) {
  return {
    type: actions.EXPENSE_REMOVE,
    payload:categoriesApi.removeExpense(categoryId, expenseId).then(() => ({ categoryId, expenseId }))
  };
}