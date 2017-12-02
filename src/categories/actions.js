import * as actions from './constants';
import { LOADING, LOADED } from '../loader/reducer';
import { ERROR } from '../error/reducers'; 
import { get, add, update, remove } from '../services/category-api';

const renameIds = categories => !categories ? null : categories.map(category => {
  category.id = category._id;
  delete category._id;
  return category;
});
export const renameId = category =>  {
  category.id = category._id;
  delete category._id;
  return category;
};

export function getCategories() {
  return async dispatch => {
    
    dispatch({ type: LOADING });
    try{
      const { categories, totalBudget } = await get();
      
      dispatch({
        type: actions.CATEGORY_GET,
        payload: renameIds(categories)
      });
      dispatch({
        type: actions.GET_TOTAL_BUDGET,
        payload: totalBudget
      });
    }
    catch(err) {
      dispatch({
        type: ERROR,
        payload: err.stack
      });
    }
    finally {
      dispatch({ type: LOADED });
    }
  };
}

export function addCategory(input) {
  return async dispatch => {

    dispatch({ type: LOADING });
    try {
      const newCategory = await add(input);
      console.log(newCategory);

      dispatch({
        type: actions.CATEGORY_ADD,
        payload: renameId(newCategory)
      });
    }
    catch(err) {
      dispatch({
        type: ERROR,
        payload: err.stack
      });
    }
    finally {
      dispatch({ type: LOADED });
    }

  };
}

export function removeCategory({ id }) {
  return async dispatch => {

    dispatch({ type: LOADING });
    try {
      const isRemoved = await remove(id);
      
      if(isRemoved) dispatch({
        type: actions.CATEGORY_REMOVE,
        payload: { id: id }
      });
    }
    catch(err) {
      dispatch({
        type: ERROR,
        payload: err.stack
      });
    }
    finally {
      dispatch({ type: LOADED });
    }

  };
}

export function updateCategory(category) {
  if(!category.name) delete category.name;
  if(!category.budget) delete category.budget;

  return async dispatch => {

    dispatch({ type: LOADING });
    try{
      const updated = await update(category);
      
      if(Object.keys(updated).length !== 0)
        dispatch({
          type: actions.CATEGORY_UPDATE,
          payload: renameId(category)
        });
    }
    catch(err) {
      dispatch({
        type: ERROR,
        payload: err.stack
      });
    }
    finally {
      dispatch({ type: LOADED });
    }
  };
}