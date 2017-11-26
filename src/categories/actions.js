import * as actions from './constants';
import shortid from 'shortid';

export function addCategory({ name, budget }) {
  return {
    type: actions.CATEGORY_ADD,
    payload: {
      id: shortid.generate(),
      timestamp: new Date(),
      name: name,
      budget: budget
    }
  };
}

export function removeCategory({ id }) {
  return {
    type: actions.CATEGORY_REMOVE,
    payload: { id: id }
  };
}

export function updateCategory(category) {
  return {
    type: actions.CATEGORY_UPDATE,
    payload: category
  };
}