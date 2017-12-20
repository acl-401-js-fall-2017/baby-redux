import { request } from './request';

export default {
  get(id) {
    return request.get(`/categories/${id}`);
  },
  add(expense) {
    return request.post('/expenses', expense);
  },
  remove(id) {
    return request.delete(`/expenses/${id}`);
  },
  update(expense) {
    return request.put(`/expenses/${expense._id}`, expense);
  }
};