import api from './api';

export default {
  get() {
    return api.get('/budgets');
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