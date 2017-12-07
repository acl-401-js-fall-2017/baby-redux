import api from './api';

export default {
  add(categoryId, data) {
    return api.post(`/categories/${categoryId}/expenses`, data);
  },
  get(categoryId, expenseId) {
    return api.get(`/categories/${categoryId}/expenses/${expenseId}`);
  },
  update(categoryId, data) {
    return api.put(`/categories/${categoryId}/expenses/${data._id}`, data);
  },
  remove(categoryId, expenseId) {
    return api.delete(`/categories/${categoryId}/expenses/${expenseId}`);
  },
  getAll(categoryId) {
    return api.get(`/categories/${categoryId}/expenses`);
  }
};