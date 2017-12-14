import * as actions from './constants';
import categoriesApi from '../services/category-api';

export function loadCategories() {
  return async dispatch => {
    try {
      // action is starting, 
      // tell the store we are loading...
      dispatch({ type : actions.LOADING });
      // talk to server via api...
      const categories = await categoriesApi.get();
      // dispatch load action when done...
      dispatch({ type: actions.CATEGORY_LOAD, payload: categories });
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
      const saved = await categoriesApi.add(category);
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

export function removeCategory(id) {
  return async dispatch =>{
    try {
      const removed = await categoriesApi.remove(id);
      dispatch({
        type: actions.CATEGORY_REMOVE,
        payload: removed
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

export function updateCategory(category) {
  return async dispatch => {
    try {
      const updated= await categoriesApi.update(category);
      dispatch({
        type: actions.CATEGORY_UPDATE,
        payload: updated
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
