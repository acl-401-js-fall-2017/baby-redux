import api from './api';

export default {
  get(id) {
    return api.get(`/expenses/${id}`);
  },
  add(budget) {
    return api.post('/expenses', budget);
  },
  remove(id) {
    return api.delete(`/expenses/${id}`);
  },
  update(data) {
    return api.put(`/expenses/${data._id}`, data);
}
};