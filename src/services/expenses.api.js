import api from './api';

export default {
  getAll(categoryId) {
    return api.get(`/categories/${categoryId}/expenses`);
  },
  get(categoryId, expenseId) {
    return api.get(`/categories/${categoryId}/expenses/${expenseId}`);
  },
  add(categoryId, data) {
    return api.post(`/categories/${categoryId}/expense`, data);
  },
  remove(categoryId, expenseId) {
    return api.delete(`/categories/${categoryId}/expenses/${expenseId}`);
  },
  update(categoryId, data) {
    return api.patch(`/categories/${categoryId}/expenses/${data._id}`, data);
  }
};