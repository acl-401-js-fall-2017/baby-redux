import api from './api';

export default {
  get() {
    return api.get('/categories');
  },
  post(category) {
    console.log('got to add in category');
    return api.post('/categories', category);
  },
  remove(id) {
    return api.delete(`/categories/${id}`);
  }
};