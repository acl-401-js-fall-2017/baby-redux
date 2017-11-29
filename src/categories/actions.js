import * as actions from './constants';
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
    const categories = await get();
    
    dispatch({
      type: actions.CATEGORY_GET,
      payload: renameIds(categories)
    });
  };
}

export function addCategory(input) {
  return async dispatch => {
    const newCategory = await add(input);
    console.log('pre dispatch');
    dispatch({
      type: actions.CATEGORY_ADD,
      payload: renameId(newCategory)
    });
  };
}

export function removeCategory({ id }) {
  return async dispatch => {
    const isRemoved = await remove(id);
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
    const updated = await update(category);
    console.log(updated);
    if(Object.keys(updated).length === 0)
      dispatch({
        type: actions.CATEGORY_UPDATE,
        payload: renameId(category)
      });
  };
}