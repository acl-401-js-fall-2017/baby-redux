import * as actions from './constants';
import categoryApi from '../services/categories.api';

export function loadCategories() {

  return async dispatch => {

    const categories = await categoryApi.get();

    dispatch({
      type: actions.CATEGORY_LOAD,
      payload: categories
    });
  };
}

export function addCategory(category) {

  return async dispatch => {

    const categories = await categoryApi.add(category);
    dispatch({
      type: actions.CATEGORY_ADD,
      payload: categories
    });
  };
}

export function updateCategory(category) {
  return {
    type: actions.CATEGORY_UPDATE,
    payload: category
  };
}

export function removeCategory(_id) {

  return async dispatch => {
    const category = await categoryApi.remove(_id);
    console.log(category.removed);
    if(category.removed) {
      dispatch({
        type: actions.CATEGORY_REMOVE,
        payload: { _id }
      });
    }
  };
}