import * as actions from './constants';
import categoriesApi from '../services/categories-api';

export function addExpense(category, expense) {
  category.expenses.push(expense);
  return {
    type: actions.CATEGORY_UPDATE,
    payload: categoriesApi.update(category._id, category)
  };
}

export function loadCategories () {
  return{
    type: actions.CATEGORY_LOAD,
    payload: categoriesApi.get()
  };
} 

export function addCategory(category) {
  return{
    type: actions.CATEGORY_ADD,
    payload: categoriesApi.post(category)
  };
}

export function updateCategory(id, update) {
  return {
    type: actions.CATEGORY_UPDATE,
    payload: categoriesApi.update(id, update)
  };
}

export function removeCategory(id) {
  return {
    type: actions.CATEGORY_REMOVE,
    payload: categoriesApi.remove(id).then(() => id)
  };
}
