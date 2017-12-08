import api from './api';

export default {
  get(categoryId, expenseId) {
    return api.get(`/categories/${categoryId}/expenses/${expenseId}`);
  },
  add(categoryId, data) {
    return api.post(`/categories/${categoryId}/expenses`, data);
  },
  update(categoryId, data) {
    return api.patch(`/categories/${categoryId}/expenses/${data._id}`, data);
  },
  remove(categoryId, expenseId) {
    return api.delete(`/categories/${categoryId}/expenses/${expenseId}`);
  },
  getAll(categoryId) {
    return api.get(`/categories/${categoryId}/expenses`);
  }
};