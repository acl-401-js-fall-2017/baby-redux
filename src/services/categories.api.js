import api from './api';

export default {
  add(categories) {
    return api.post('/categories', categories);
  },

  get() {
    return api.get('/categories');
  },

  update(id) {
    return api.put(`/categories/${id}`);
  },

  remove(id) {
    return api.delete(`/categories/${id}`);
  }
};