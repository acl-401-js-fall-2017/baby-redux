import *  as actions from './constants';
import budgetsApi from '../services/budgets-api';

export function loadCategory(options) {
  return async dispatch => {
    dispatch({ type: actions.CATEGORY_LOADING });
    try {
      const budgets = await budgetsApi.get(options);
      dispatch({ 
        type: actions.CATEGORY_LOAD,
        payload: budgets
      });
    }
    catch(err) {
      dispatch({
        type: actions.CATEGORY_ERROR,
        payload: err
      });
      // check below line for random error;
      throw err;
    }
  };
}

export function testCondition(options) {
  return async (dispatch, getState) => {
    dispatch({ type: actions.CATEGORY_LOADING });
    try {
      const budgets = await budgetsApi.testGet(options);
      dispatch({
        type: actions.CATEGORY_LOAD,
        payload: getState().budgets
      });
    }
    catch (err) {
      dispatch({
        type: actions.CATEGORY_ERROR,
        payload: err
      });
      // check below line for random error;
      throw err;
    }
  };
}

export function addCategory(budget) {
  return async dispatch => {
    try {
      const saved = await budgetsApi.add(budget);
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

export function updateCategory(budget) {
  return async dispatch => {
    try{
      const changed = await budgetsApi.update(budget);
      dispatch({
        type: actions.CATEGORY_UPDATE,
        payload: { changed }
      });
    }
    catch (err) {
      dispatch({
        type: actions.CATEGORY_ERROR,
        payload: err
      });
    }  
  };
}

export function removeCategory(id) {
  return async dispatch => {
    try {
      const remove = await budgetsApi.remove(id);
      dispatch({
        type: actions.CATEGORY_REMOVE,
        payload: remove
      });
    }
    catch (err) {
      dispatch({
        type: actions.CATEGORY_ERROR,
        payload: err
      });
    }   
  };
}
