import * as actions from './constants';
import shortid from 'shortid';
import categoriesApi from '../services/categories-api';


export function loadCategories () {
  return async (dispatch, getState) => {
    const { categories } = getState();
    if (categories) return;
    try {
      const loaded = await categoriesApi.get();
      dispatch({
        type: actions.CATEGORY_LOAD,
        payload: loaded
      });
    }
    catch(err) {
      dispatch({
        type: actions.CATEGORY_ERROR,
        payload: err
      });
    }
  };
} 

export function addCategory(category) {
  return async dispatch => {
    try {
      const saved = await categoriesApi.post(category);
      dispatch({
        type: actions.CATEGORY_ADD,
        payload: saved
      });
    }
    catch(err) {
      dispatch({
        type: actions.CATEGORY_ERROR,
        payload: err
      });
    }
  };
}

export function updateCategory(update) {
  return {
    type: actions.CATEGORY_UPDATE,
    payload: update
  };
}

export function removeCategory(id) {
  return async dispatch => {
    const removed = await categoriesApi.remove(id);
    dispatch({
      type: actions.CATEGORY_REMOVE,
      payload: id
    });
  };
}
