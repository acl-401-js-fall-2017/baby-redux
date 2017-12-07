import *  as actions from './constants';
import expensesApi from '../services/expenses-api';

export function loadCategory(options) {
  return async dispatch => {
    dispatch({ type: actions.CATEGORY_LOADING });
    try {
      const expenses = await expensesApi.get(options);
      dispatch({ 
        type: actions.CATEGORY_LOAD,
        payload: expenses
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
      const expenses = await expensesApi.testGet(options);
      dispatch({
        type: actions.CATEGORY_LOAD,
        payload: getState().expenses
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

export function addCategory(expense) {
  return async dispatch => {
    try {
      const saved = await expensesApi.add(expense);
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

export function updateCategory(expense) {
  return async dispatch => {
    try{
      const changed = await expensesApi.update(expense);
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
      const remove = await expensesApi.remove(id);
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
