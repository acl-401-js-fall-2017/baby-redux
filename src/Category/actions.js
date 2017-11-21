import * as actions from './constants';
import shortid from 'shortid';

export function addBudget(budget) {
  budget._id = shortid.generate();
  budget.timestamp = new Date();
  return {
    type: actions.BUDGET_ADD,
    payload: budget
  };
}

export function updateBudget(budget) {
  return {
    type: actions.BUDGET_UPDATE
  };
}

export function removeBudget(id) {
  return {
    type: actions.BUDGET_REMOVE,
    payload: id
  };
}
