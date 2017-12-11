import *  as ACTIONS from './category.constants';
import categoriesApi from '../../services/categories-api';

export function loadCategory(options) {
  return async dispatch => {
    dispatch({ type: ACTIONS.CATEGORY_LOADING });
    try {
      const expenses = await categoriesApi.get(options);
      dispatch({ 
        type: ACTIONS.CATEGORY_LOAD,
        payload: expenses
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
      const saved = await categoriesApi.add(expense);
      dispatch({
        type: ACTIONS.CATEGORY_ADD,
        payload: saved
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
      const changed = await categoriesApi.update(expense);
      dispatch({
        type: ACTIONS.CATEGORY_UPDATE,
        payload: { changed }
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
      const remove = await categoriesApi.remove(id);
      dispatch({
        type: ACTIONS.CATEGORY_REMOVE,
        payload: remove
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
