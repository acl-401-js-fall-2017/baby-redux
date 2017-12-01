import shortid from 'shortid';
import * as actions from './constants';
import categoriesApi from '../services/categoriesApi';
import categories from './reducers';


export function loadCategories() {
  return async dispatch => {
    try {
      const loadedCategories = await categoriesApi.get();
      console.log(`gotCategories: ${JSON.stringify(loadedCategories)}`);
      dispatch({ type: actions.CATEGORY_LOAD, payload: loadedCategories });
    }
    catch(error){
      dispatch({ type: actions.CATEGORY_ERROR, payload: error });
    }
  }
}

export const addCategory = ({ name, budget }) => {
  return async (dispatch) => {
    try {
      const savedCategory = await categoriesApi.add({ name, budget })
      console.log(`add a new category with: ${ savedCategory }`);
      dispatch({
        type: actions.CATEGORY_ADD,
        payload: savedCategory
      });
    }
    catch(error){
      dispatch({ type: actions.CATEGORY_ERROR, payload: error });
    }
  }

}

export const removeCategory = (id) => {
  return async (dispatch) => {
    try {
      const isRemoved = await categoriesApi.remove(id)
      console.log(`delete successful?: ${ isRemoved.removed }`);
      dispatch({ type: actions.CATEGORY_REMOVE, payload: id });
    }
    catch(error){
      console.log('here is error if I got one!', error);
      dispatch({ type: actions.CATEGORY_ERROR, payload: error });
    }
  }
}

export const updateCategory = (category) => {
  return async (dispatch) => {
    try {
      const updatedBudget = await categoriesApi.update(category);
      console.log(`update successful?: ${ updatedBudget }`);
      dispatch({ type: actions.CATEGORY_UPDATE, payload: category });
    }
    catch(error){
      console.log('here is error if I got one!', error);
      dispatch({ type: actions.CATEGORY_ERROR, payload: error });
    }
  }
  return { type: actions.CATEGORY_UPDATE, payload: category
  };
}