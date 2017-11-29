import api from './api';

export default {
  get() {
    return api.get('/categories');
  },
  add(category) {
    return api.post('/categories', category);
  },
  remove(id) {
    return api.fetch(`/categories/${id}`);
  }
};