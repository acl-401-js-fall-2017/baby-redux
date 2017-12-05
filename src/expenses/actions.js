import expenses from './reducers';
import * as actions from './constants';
import expensesApi from '../services/expensesApi';


export function loadExpenses(id) {
      return { type: actions.CATEGORY_LOAD, payload: expensesApi.get(id) }
}


export const addExpense = ({ name, budget }) => {
  return { type: actions.CATEGORY_ADD, payload: categoriesApi.add({ name, budget })}
}

export const removeExpense = (id) => {
      return { type: actions.CATEGORY_REMOVE, payload: categoriesApi.remove(id).then(()=> id) }
}

export const updateExpense = (category) => {
      return { type: actions.CATEGORY_UPDATE, payload: categoriesApi.update(category) }
}