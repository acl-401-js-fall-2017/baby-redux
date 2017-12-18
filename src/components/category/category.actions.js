import *  as ACTIONS from './category.constants';
import categoriesApi from '../../services/categories-api';

export function loadCategory(options) {
  return  {
    type: ACTIONS.CATEGORY_LOAD,
    payload: categoriesApi.get(options)  
  };  
}

export function addCategory(expense) {
  return {
    type: ACTIONS.CATEGORY_ADD,
    payload: categoriesApi.add(expense)
  };
}

export function updateCategory(expense) {
  return {
    type: ACTIONS.CATEGORY_UPDATE,
    payload: categoriesApi.update(expense)
  };
}

export function removeCategory(id) {
  return {
    type: ACTIONS.CATEGORY_REMOVE,
    payload: categoriesApi.remove(id)
  };
}
