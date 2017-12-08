import * as actions from './constants';
import categoriesApi from '../services/categories.api';

export function loadCategory() {
  return dispatch => {
    dispatch({ type: actions.CATEGORY_LOAD, payload: categoriesApi.get() });
  };
}

export function addCategory(category) {
  return dispatch => {
    dispatch({ type: actions.CATEGORY_ADD, payload: categoriesApi.add(category) });
  };
}

export function updateCategory(id, data) {
  return dispatch => {
    dispatch({ type: actions.CATEGORY_UPDATE, payload: categoriesApi.update(id, data) });
  };
}

export function removeCategory(id) {
  return dispatch => {
    dispatch({ type: actions.CATEGORY_REMOVE, payload: categoriesApi.remove(id).then(() => id) });
  };
}