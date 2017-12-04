import * as actions from './constants';
import categoryApi from '../services/categories.api';


export function loadCategories() {
  return {
    type: actions.CATEGORY_LOAD,
    payload: categoryApi.get()
  };
}

export function addCategory({ name, budget }) {
  return {
    type: actions.CATEGORY_ADD,
    payload: categoryApi.add({ name, budget })
  };
}

export function updateCategory(category) {
  return {
    type: actions.CATEGORY_UPDATE,
    payload: categoryApi.update(category)
  };
}

export function removeCategory(_id) {
  return {
    type: actions.CATEGORY_REMOVE,
    payload: { _id }
  };
}
