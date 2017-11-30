import * as actions from './constants';

export function addCategory(category) {
  category.timestamp = new Date();
  
  return {
    type: actions.CATEGORY_ADD,
    payload: category
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