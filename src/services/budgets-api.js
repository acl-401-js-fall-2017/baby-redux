import api from './api';

export default {
  get() {
    return api.get('/budgets');
  },
  testGet(option) {
    let query = '';
    if (option) {
      query = '?';
      Object.keys(option).forEach(key => {
        query += `${key}=${option[key]}`;
      });
    }
    console.log('option client side====', option);
    console.log('query client side====', query);
    return api.get(`/budgets${query}`);
  },
  add(budget) {
    return api.post('/budgets', { name: budget.name, amount: budget.amount });
  },
  update(budget) {
    return api.put(`/budgets/${budget._id}`, { name: budget.name, amount: budget.amount });
  },
  remove(id) {
    return api.delete(`/budgets/${id}`);
  }
};