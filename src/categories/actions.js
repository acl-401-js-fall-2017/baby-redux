import * as actions from './constants';
import { LOADING, LOADED } from '../loader/reducer';
import { ERROR } from '../error/reducers'; 
import { get, add, update, remove } from '../services/category-api';

const renameIds = categories => !categories ? null : categories.map(category => {
  category.id = category._id;
  delete category._id;
  return category;
});
const renameId = category =>  {
  category.id = category._id;
  delete category._id;
  return category;
};

export function getCategories() {
  return async dispatch => {
    
    dispatch({ type: LOADING });
    try{
      const categories = await get();
      if(categories.error) throw categories;
  
      dispatch({
        type: actions.CATEGORY_GET,
        payload: renameIds(categories)
      });
    }
    catch(err) {
      dispatch({
        type: ERROR,
        payload: err.error
      });

      throw err;
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
      if(newCategory.error) throw newCategory.error;

      dispatch({
        type: actions.CATEGORY_ADD,
        payload: renameId(newCategory)
      });
    }
    catch(err) {
      dispatch({
        type: ERROR,
        payload: err
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
      if(isRemoved.error) throw isRemoved.error;
      
      if(isRemoved) dispatch({
        type: actions.CATEGORY_REMOVE,
        payload: { id: id }
      });
    }
    catch(err) {
      dispatch({
        type: ERROR,
        payload: err
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
      if(updated.error) throw updated.error;
      
      if(Object.keys(updated).length !== 0)
        dispatch({
          type: actions.CATEGORY_UPDATE,
          payload: renameId(category)
        });
    }
    catch(err) {
      dispatch({
        type: ERROR,
        payload: err
      });
    }
    finally {
      dispatch({ type: LOADED });
    }
  };
}