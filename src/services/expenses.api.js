import api from './api';

export default {
  get(categoryId, expenseId) {
    return api.get(`/categories/${categoryId}/expenses/${expenseId}`);
  },
  add(categoryId, expense) {
    return api.post(`/categories/${categoryId}/expense`, expense);
  },
  remove(categoryId, expenseId) {
    return api.delete(`/categories/${categoryId}/expenses/${expenseId}`);
  },
  update(categoryId, data) {
    return api.patch(`/categories/${categoryId}/expenses/${data._id}`, data);
  }
};