import api from './api';

export default {
  get() {
    return api.get(`/budgets`);
  },
  add(budget) {
    return api.post('/budgets', budget);
  },
  remove(id) {
    return api.delete(`/budgets/${id}`);
  },
  update(data) {
    return api.put(`/budgets/${data._id}`, data);
}
};