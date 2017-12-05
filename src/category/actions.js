import * as actions from './constants';
import { RESPONSE_LOADED } from '../load/reducer';
import categoriesApi from '../services/categories.api';

export function loadCategory() {
  return async dispatch => {
    try {
      const categories = await categoriesApi.get();
      dispatch({ type: RESPONSE_LOADED, payload: categories });
    }
    catch(err) {
      dispatch({ type: actions.ERROR_LOAD, payload: err });
    }
  };
}

export function addCategory(category) {
  return async dispatch => {
    try { 
      const savedCat = await categoriesApi.add(category);
      dispatch({ type: actions.CATEGORY_ADD, payload: savedCat });
    }
    catch(err) {
      dispatch({ type: actions.ERROR_LOAD, payload: err });
    }
  };
}

export function updateCategory(id, data) {
  return async dispatch => {
    try {
      const updateCat = await categoriesApi.update(id, data);
      dispatch({ type: actions.CATEGORY_UPDATE, payload: updateCat });
    }
    catch(err) {
      dispatch({ type: actions.ERROR_LOAD, payload: err });
    }
  };
}

export function removeCategory(id) {
  return async dispatch => {
    try {
      await categoriesApi.remove(id);
      dispatch({ type: actions.CATEGORY_REMOVE, payload: id });
    }
    catch(err) {
      dispatch({ type: actions.ERROR_LOAD, payload: err });
    }
  };
}