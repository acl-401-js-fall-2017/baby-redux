import * as actions from './constants';
import categoryApi from '../services/categories.api';

export function addCategory(category) {

  return async dispatch => {

    const categories = await categoryApi.get();
    dispatch({
      type: actions.CATEGORY_ADD,
      payload: categories
    });

  // category.timestamp = new Date();
  
  // return {
  //   type: actions.CATEGORY_ADD,
  //   payload: category
  // };
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