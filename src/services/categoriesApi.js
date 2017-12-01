import api from './api';

export default {
  get() {
    return api.get(`/budgets`);
  },
  add(budget) {
    return api.post('/budgets', budget);
  },
  remove(id) {
    console.log('ID FIX!!!!', JSON.stringify(id));
    return api.delete(`/budgets/${id}`);
  }
};