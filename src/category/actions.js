import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE, LOADING, DONE_LOADING } from './constants';
import categoryApi from '../services/categories-api';

export function loadCategories() {
  return async dispatch => {
    dispatch({ type: LOADING });

    const categories = await categoryApi.get();

    dispatch({ type: DONE_LOADING });
    dispatch({ type: CATEGORY_LOAD, payload: categories });
  };
}

export function addCategory(category) {
  return async dispatch => {
    dispatch({ type: LOADING });
    const saved = await categoryApi.add(category);
    dispatch({ type: DONE_LOADING });
    dispatch({ 
      type: CATEGORY_ADD, 
      payload: saved 
    });
  };
}

export function updateCategory(category) {
  return async dispatch => {
    dispatch({ type: LOADING });    
    const updated = await categoryApi.update(category);
    dispatch({ type: DONE_LOADING });
    dispatch({
      type: CATEGORY_UPDATE,
      payload: updated
    });
  };
}

export function removeCategory(id) {
  return async dispatch => {
    dispatch({ type: LOADING });
    await categoryApi.remove(id);
    dispatch({ type: DONE_LOADING });
    dispatch({
      type: CATEGORY_REMOVE,
      payload: id
    });
  };

}