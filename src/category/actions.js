import * as actions from './constants';
import shortid from 'shortid';
import categoriesApi from '../services/categories-api';


export function loadCategories () {
  return async dispatch => {
    try {
      const loaded = await categoriesApi.get();
      console.log('response from api is:', loaded);
      dispatch({
        type: actions.CATEGORY_LOAD,
        payload: loaded
      });
    }
    catch(err) {
      dispatch({
        type: actions.CATEGORY_ERROR,
        payload: err
      });
    }
  };
} 
export function addCategory(category) {
  console.log('got to add with ', category);
  return async dispatch => {
    try {
      const saved = await categoriesApi.post(category);
      console.log('added is',saved);
      dispatch({
        type: actions.CATEGORY_ADD,
        payload: saved
      });
    }
    catch(err) {
      dispatch({
        type: actions.CATEGORY_ERROR,
        payload: err
      });
    }
  };
}

export function updateCategory(update) {
  return {
    type: actions.CATEGORY_UPDATE,
    payload: update
  };
}

export function removeCategory(id) {
  return {
    type: actions.CATEGORY_REMOVE,
    payload: id
  };
}
