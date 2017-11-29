import * as actions from './constants';
import categoriesApi from '../services/categories.api';
import shortid from 'shortid';

export function loadCategory() {
  return async dispatch => {
    try {
      const categories = await categoriesApi.get();
      dispatch({ type: actions.CATEGORY_LOAD, payload: categories });
    }
    catch(err) {
      dispatch({ type: actions.CATEGORY_ERROR, payload: err });
    }
  };
}

export function addCategory(category) {
  category._id = shortid.generate();
  category.timestamp = new Date();
  return async dispatch => {
    try { 
      const savedCat = await categoriesApi.add();
      dispatch({ type: actions.CATEGORY_ADD, payload: savedCat });
    }
    catch(err) {
      dispatch({ type: actions.CATEGORY_ERROR, payload: err });
    }
  };
}

export function updateCategory(category) {
  return {
    type: actions.CATEGORY_UPDATE,
    payload: category
  };
}

export function removeCategory(id) {
  return {
    type: actions.CATEGORY_REMOVE,
    payload: id
  };
}