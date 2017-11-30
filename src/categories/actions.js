import shortid from 'shortid';
import * as actions from './constants';
import categoriesApi from '../services/categoriesApi';
import categories from './reducers';


export function loadCategories() {
  return async dispatch => {
    try {
      const loadedCategories = await categoriesApi.get();
      console.log(`getting ......${JSON.stringify(loadedCategories)}`);
      dispatch({ type: actions.CATEGORY_LOAD, payload: loadedCategories });
    }
    catch(error){
      dispatch({ type: actions.CATEGORY_ERROR, payload: error });
    }
  }
}

export const addCategory = ({ name, budget }) => {
  return {
    type: actions.CATEGORY_ADD,
    payload: {
      id: shortid.generate(),
      timestamp: new Date(),
      name,
      budget
    }
  };
}

export const removeCategory = ({ id }) => {
  return { type: actions.CATEGORY_REMOVE, payload: { id }};
}

export const updateCategory = (category) => {
  return { type: actions.CATEGORY_UPDATE, payload: category
  };
}