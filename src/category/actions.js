import *  as actions from './constants';
import shortid from 'shortid';
import budgetsApi from '../services/budgets-api';

export function loadCategory(){
  return async dispatch => {
    try {
      const budgets = await budgetsApi.get();
      dispatch({ type: actions.CATEGORY_LOAD, payload: budgets });
    }
    catch(err) {
      dispatch({
        type: actions.CATEGORY_ERROR,
        payload: err
      });
    }
  };
}

export function addCategory(budget) {
  budget._id = shortid.generate();
  budget.timestamp = Date();
  return {
    type: actions.CATEGORY_ADD,
    payload: budget
  };
}

export function updateCategory(budget) {
  return {
    type: actions.CATEGORY_UPDATE,
    payload: budget
  };
}

export function removeCategory(id) {
  return {
    type: actions.CATEGORY_REMOVE,
    payload: id
  };
}
