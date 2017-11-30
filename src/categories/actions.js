import * as actions from './constants';
import { LOADING, LOADED } from '../loader/reducer';
import { get, add, update, remove } from '../services/category-api';

const renameIds = categories => categories.map(category => {
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
    const categories = await get();
    dispatch({ type: LOADED });

    dispatch({
      type: actions.CATEGORY_GET,
      payload: renameIds(categories)
    });

  };
}

export function addCategory(input) {
  return async dispatch => {

    dispatch({ type: LOADING });
    const newCategory = await add(input);
    dispatch({ type: LOADED });

    console.log('pre dispatch');
    dispatch({
      type: actions.CATEGORY_ADD,
      payload: renameId(newCategory)
    });
  };
}

export function removeCategory({ id }) {
  return async dispatch => {

    dispatch({ type: LOADING });
    const isRemoved = await remove(id);
    dispatch({ type: LOADED });

    if(isRemoved) dispatch({
      type: actions.CATEGORY_REMOVE,
      payload: { id: id }
    });
  };
}

export function updateCategory(category) {
  if(!category.name) delete category.name;
  if(!category.budget) delete category.budget;

  return async dispatch => {

    dispatch({ type: LOADING });
    const updated = await update(category);
    dispatch({ type: LOADED });

    if(Object.keys(updated).length !== 0)
      dispatch({
        type: actions.CATEGORY_UPDATE,
        payload: renameId(category)
      });
  };
}