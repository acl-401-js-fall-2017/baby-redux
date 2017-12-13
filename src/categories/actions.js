import shortid from 'shortid';
import * as actions from './constants';
import categoriesApi from '../services/categoriesApi';
import categories from './reducers';


export function loadCategories() {
  return async dispatch => {
    dispatch({ type: actions.LOADING });
    try {
      const loadedCategories = await categoriesApi.get();
      console.log(`gotCategories: ${JSON.stringify(loadedCategories)}`);
      dispatch({ type: actions.CATEGORY_LOAD, payload: loadedCategories });
      dispatch({ type: actions.LOADED });
    }
    catch(error){
      dispatch({ type: actions.CATEGORY_ERROR, payload: error });
      dispatch({ type: actions.LOADED });
    }
  }
}

export const addCategory = ({ name, budget }) => {
  return async (dispatch) => {
    dispatch({ type: actions.LOADING });
    try {
      const savedCategory = await categoriesApi.add({ name, budget })
      console.log(`add a new category with: ${ savedCategory }`);
      dispatch({
        type: actions.CATEGORY_ADD,
        payload: savedCategory
      });
      dispatch({ type: actions.LOADED });
    }
    catch(error){
      dispatch({ type: actions.CATEGORY_ERROR, payload: error });
      dispatch({ type: actions.LOADED });
    }
  }

}

export const removeCategory = (id) => {
  return async (dispatch) => {
    dispatch({ type: actions.LOADING });
    try {
      const isRemoved = await categoriesApi.remove(id)
      console.log(`delete successful?: ${ isRemoved.removed }`);
      dispatch({ type: actions.CATEGORY_REMOVE, payload: id });
      dispatch({ type: actions.LOADED });
    }
    catch(error){
      dispatch({ type: actions.CATEGORY_ERROR, payload: error });
      dispatch({ type: actions.LOADED });
    }
  }
}

export const updateCategory = (category) => {
  return async (dispatch) => {
    dispatch({ type: actions.LOADING });
    try {
      const updatedBudget = await categoriesApi.update(category);
      console.log(`update successful?: ${ updatedBudget }`);
      dispatch({ type: actions.CATEGORY_UPDATE, payload: category });
      dispatch({ type: actions.LOADED });
    }
    catch(error){
      dispatch({ type: actions.CATEGORY_ERROR, payload: error });
      dispatch({ type: actions.LOADED });
    }
  }
  return { type: actions.CATEGORY_UPDATE, payload: category
  };
}