import * as actions from './constants';
import categoriesApi from '../services/categories-api';


export function addExpense(category, expense) {
  console.log('in add expense', category, expense);
  return async dispatch => {
    dispatch({ type: actions.LOADING });
    try {
      category.expenses.push(expense);
      const updated = await categoriesApi.update(category._id, category);
      console.log( 'update from the server',updated);
      dispatch({
        type: actions.CATEGORY_UPDATE,
        payload: updated
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


export function loadCategories () {
  console.log('loading');
  return async (dispatch, getState) => {
    dispatch({ type: actions.LOADING });
    const { categories } = getState();
    if (categories) return;
    try {
      const loaded = await categoriesApi.get();
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
  return async dispatch => {
    dispatch({ type: actions.LOADING });
    try {
      const saved = await categoriesApi.post(category);
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

export function updateCategory(id, update) {
  return async dispatch => {
    dispatch({ type: actions.LOADING });
    try {
      const updated = await categoriesApi.update(id, update);
      dispatch({
        type: actions.CATEGORY_UPDATE,
        payload: updated
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

export function removeCategory(id) {
  return async dispatch => {
    dispatch({ type: actions.LOADING });
    await categoriesApi.remove(id);
    dispatch({
      type: actions.CATEGORY_REMOVE,
      payload: id
    });
  };
}
