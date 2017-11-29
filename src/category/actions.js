import { CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE } from './constants';
import shortid from 'shortid';
import categoryApi from '../services/categories-api';


// export function addCategory(category)  {
//   category._id = shortid.generate();
//   category.timestamp = new Date();

//   return {
//     type: CATEGORY_ADD,
//     payload: category
//   };
// }

export function addCategory(category) {
  return async dispatch => {
    const saved = await categoryApi.add(category);
    dispatch({ 
      type: CATEGORY_ADD, 
      payload: saved 
    });
  };
}

export function updateCategory(category) {
  return {
    type: CATEGORY_UPDATE,
    payload: category
  };
}

export function removeCategory(id) {
  return {
    type: CATEGORY_REMOVE,
    payload: id
  };
}