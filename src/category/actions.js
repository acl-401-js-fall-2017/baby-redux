import { CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE } from './constants';
import categoryApi from '../services/categories-api';
import category from './reducer';


export function addCategory(category) {
  return async dispatch => {
    const saved = await categoryApi.add(category);
    dispatch({ 
      type: CATEGORY_ADD, 
      payload: saved 
    });
  };
}

// export function updateCategory(category) {
//   return {
//     type: CATEGORY_UPDATE,
//     payload: category
//   };
// }

export function updateCategory(category) {
  return async dispatch => {
    const updated = await categoryApi.update(category);
    dispatch({
      type: CATEGORY_UPDATE,
      payload: updated
    });
  };
}

export function removeCategory(id) {
  return async dispatch => {
    await categoryApi.remove(id);
    dispatch({
      type: CATEGORY_REMOVE,
      payload: id
    });
  };

}