import api from './api';

export default {
  get() {
    return api.get('/categories');
  },
  post(category) {
    return api.post('/categories', category);
  },
  remove(id) {
    return api.delete(`/categories/${id}`);
  }
};