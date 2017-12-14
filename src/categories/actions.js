import { CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE, CATEGORY_LOAD, ERROR, LOADING } from './constants';
import categoryApi from '../services/category-api.js';

export function loadCategories() {
  return async dispatch => {
    dispatch({ type: LOADING });

    try {
      const categories = await categoryApi.get();
      dispatch({
        type: CATEGORY_LOAD,
        payload: categories
      });
    }
    catch(err) {
      dispatch({
        type: ERROR,
        payload: err
      });
      throw err;
    }
  };
}

export function addCategory(category) {
  console.log('in actionAdd');
  return async dispatch => {
    try {
      const saved = await categoryApi.post(category);
      // category.timestamp = new Date();
      dispatch({
        type: CATEGORY_ADD,
        payload: saved
      });
    }
    catch(err) {
      dispatch({
        type: ERROR,
        payload: err
      });
    }
  };
}

export function updateCategory(category) {
  console.log('in updateCategory', category);
  return async dispatch => {
    try {
      const updatedData = await categoryApi.put(category.id, { name: category.name, budget: category.budget });
      dispatch({
        type: CATEGORY_UPDATE,
        payload: updatedData
      });
    }
    catch(err) {
      dispatch({
        type: ERROR,
        payload: err
      });
    }
  };
}

export function removeCategory(id) {
  return async dispatch => {
    try {
      await categoryApi.delete(id);
      dispatch({
        type: CATEGORY_REMOVE,
        payload: id
      });
    }
    catch(err) {
      dispatch({
        type: ERROR,
        payload: err
      });
    }
  };
}