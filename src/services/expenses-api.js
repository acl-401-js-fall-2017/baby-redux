import api from './api';

export default {
  get(id) {
    return api.get(`/categories/${id}`);
  },
  add(expense) {
    return api.post('/expenses', expense);
  },
  remove(id) {
    return api.delete(`/expenses/${id}`);
  },
  update(expense) {
    return api.put(`/expenses/${expense._id}`, expense);
  }
};