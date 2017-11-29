import api from './api';

export default {
  get() {
    return api.get('/categories');
  },

  add(category) {
    return api.post('/categories', category);
  },

  remove(id) {
    return api.delete(`/categories/${id}`);
  },

  update(id, content) {
    return api.put(`/categories/${id}`, content);
  }

};