import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE } from '../utils/constants';
import categoryApi from '../services/categories-api';

export function loadCategories() {
  return async dispatch => {
    await dispatch({
      type: CATEGORY_LOAD,
      payload: categoryApi.get()
    });
  };
}

export function addCategory(category) {
  return async dispatch => {
    await dispatch({
      type: CATEGORY_ADD,
      payload: categoryApi.add(category)
    });
  };
}

export function updateCategory(category) {
  return async dispatch => {
    await dispatch({
      type: CATEGORY_UPDATE,
      payload: categoryApi.update(category)
    });
  };
}

export function removeCategory(id) {
  return async dispatch => {
    await dispatch({
      type: CATEGORY_REMOVE,
      payload: categoryApi.remove(id).then(() => id)
    });
  };
}