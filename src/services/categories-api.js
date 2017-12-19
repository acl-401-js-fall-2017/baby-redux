import { request } from './request';

export default {
  get() {
    return request.get('/categories');
  },
  post(category) {
    return request.post('/categories', category);
  },
  update(id, update) {
    return request.put(`/categories/${id}`, update);
  },
  remove(id) {
    return request.delete(`/categories/${id}`);
  },
  addExpense(id, expense){
    return request.post(`/categories/${id}/expenses`, expense);
  },
  removeExpense(id, expenseId){
    return request.delete(`/categories/${id}/expenses/${expenseId}`);
  }
};