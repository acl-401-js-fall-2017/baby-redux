import { get as apiGet, post, patch, remove as apiRemove } from './api';

export const get = () => apiGet('/categories');

export const add = category => post('/categories', category);

export const update = (update) => patch(`/categories/${update.id}`, update);

export const remove = id => apiRemove(`/categories/${id}`);


export const addExpense = (newExpense, categoryId) => patch(`/categories/${categoryId}/expenses/add`, newExpense);

export const removeExpense = (expenseId, categoryId) => patch(`/categories/${categoryId}/expenses/remove`, { expenseId });

export const updateExpense = (expenseId, categoryId, expenseUpdates) => patch(`/categories/${categoryId}/expenses/update/${expenseId}`, expenseUpdates);