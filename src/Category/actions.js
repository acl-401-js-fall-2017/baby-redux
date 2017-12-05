import * as actions from './constants';
import budgetsApi from '../services/budgets-api';

export function loadBudgets() {
  return async dispatch => {
    try {
      const budgets = await budgetsApi.get();
      dispatch({ type: actions.BUDGET_LOAD, payload: budgets });
    }
    catch(err) {
      dispatch({
        type: actions.BUDGET_ERROR, 
        payload: err
      });
    }
  };
}

export function addBudget(budget) {
  return async dispatch => {
    try {
      const saved = await budgetsApi.add(budget);
      dispatch({
        type: actions.BUDGET_ADD,
        payload: saved
      });
    }
    catch(err) {
      dispatch({
        type: actions.BUDGET_ERROR,
        payload: err
      });
    }
  };
}

export function removeBudget(id) {
  return async dispatch =>{
    try {
      const removed = await budgetsApi.remove(id);
      dispatch({
        type: actions.BUDGET_REMOVE,
        payload: removed
      });
    }
    catch(err) {
      dispatch({
        type: actions.BUDGET_ERROR,
        payload: err
      });
    }
  };
}

export function updateBudget(budget) {
  return async dispatch => {
    try {
      const updated= await budgetsApi.update(budget);
      dispatch({
        type: actions.BUDGET_UPDATE,
        payload: updated
      });
    }
    catch(err) {
      dispatch({
        type: actions.BUDGET_ERROR,
        payload: err
      });
    }
  };
}
