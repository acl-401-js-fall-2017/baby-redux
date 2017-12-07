import shortid from 'shortid';
import * as actions from './constants';
import categoriesApi from '../services/categoriesApi';
import expensesApi from '../services/expensesApi';
import categories from './reducers';


export const loadCategories = () => {
      return { type: actions.CATEGORY_LOAD, payload: categoriesApi.get() }
}

export const addCategory = ({ name, budget }) => {
  return { type: actions.CATEGORY_ADD, payload: categoriesApi.add({ name, budget })}
}

export const removeCategory = (id) => {
      return { type: actions.CATEGORY_REMOVE, payload: categoriesApi.remove(id).then(()=> id) }
}

export const updateCategory = (category) => {
      return { type: actions.CATEGORY_UPDATE, payload: categoriesApi.update(category).then(()=> category) }
}