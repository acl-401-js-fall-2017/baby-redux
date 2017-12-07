import api from './api';

export default {
  get() {
    return api.get('/expenses');
  },
  testGet(option) {
    let query = '';
    if (option) {
      query = '?';
      Object.keys(option).forEach(key => {
        query += `${key}=${option[key]}`;
      });
    }
    return api.get(`/test${query}`);
  },
  add(expense) {
    return api.post('/expenses', { name: expense.name, amount: expense.amount });
  },
  update(expense) {
    return api.put(`/expenses/${expense._id}`, { name: expense.name, amount: expense.amount });
  },
  remove(id) {
    return api.delete(`/expenses/${id}`);
  }
};