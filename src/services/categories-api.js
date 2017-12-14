import api from './api';

export default {
  get() {
    return api.get('/categories');
  },
  post(category) {
    return api.post('/categories', category);
  },
  update(id, update) {
    return api.put(`/categories/${id}`, update);
  },
  remove(id) {
    return api.delete(`/categories/${id}`);
  },
  addExpense(id, expense){
    return api.post(`/categories/${id}/expenses`, expense);
  },
  removeExpense(id, expenseId){
    return api.delete(`/categories/${id}/expenses/${expenseId}`);
  }
};