import api from './api';

export default {
  add(categories) {
    return api.post('/categories', categories);
  },

  get() {
    return api.get('/categories');
  },

  remove(id) {
    return api.fetch(`/categories/${id}`);
  }
};