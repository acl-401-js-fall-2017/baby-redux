import *  as ACTIONS from './category.constants';
import categoriesApi from '../../services/categories-api';

export function loadCategory(options) {
  return async dispatch => {
    dispatch({ type: ACTIONS.CATEGORY_LOADING });
    try {
      const category = await categoriesApi.get(options);
      dispatch({ 
        type: ACTIONS.CATEGORY_LOAD,
        payload: category
      });
    }
    catch(err) {
      dispatch({
        type: ACTIONS.CATEGORY_ERROR,
        payload: err
      });
      // check below line for random error;
      throw err;
    }
  };
}

export function addCategory(expense) {
  return async dispatch => {
    try {
      const category = await categoriesApi.add(expense);
      dispatch({
        type: ACTIONS.CATEGORY_ADD,
        payload: category
      });
    }
    catch(err) {
      dispatch({
        type: ACTIONS.CATEGORY_ERROR,
        payload: err
      });
    }
  };
}

export function updateCategory(expense) {
  return async dispatch => {
    try{
      const category = await categoriesApi.update(expense);
      dispatch({
        type: ACTIONS.CATEGORY_UPDATE,
        payload: category
      });
    }
    catch (err) {
      dispatch({
        type: ACTIONS.CATEGORY_ERROR,
        payload: err
      });
    }  
  };
}

export function removeCategory(id) {
  return async dispatch => {
    try {
      const category = await categoriesApi.remove(id);
      dispatch({
        type: ACTIONS.CATEGORY_REMOVE,
        payload: category
      });
    }
    catch (err) {
      dispatch({
        type: ACTIONS.CATEGORY_ERROR,
        payload: err
      });
    }   
  };
}
