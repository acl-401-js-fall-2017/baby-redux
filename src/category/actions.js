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
    const { name, budget } = category;
    const categories = await categoryApi.add({ name, budget });
    dispatch({
      type: actions.CATEGORY_ADD,
      payload: categories
    });
  };
}

export function updateCategory(category) {


  return async dispatch => {
    const updatedCategory = await categoryApi.update(category);
    dispatch({
      type: actions.CATEGORY_UPDATE,
      payload: updatedCategory
    });
  };
}

export function removeCategory(_id) {

  return async dispatch => {
    const category = await categoryApi.remove(_id);
    if(category.removed) {
      dispatch({
        type: actions.CATEGORY_REMOVE,
        payload: { _id }
      });
    }
  };
}