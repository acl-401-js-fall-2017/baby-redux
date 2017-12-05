import api from './api';

export default {
  add(categories) {
    return api.post('/categories', 
      { name: categories.name, budget: categories.budget });
  },

  get() {
    return api.get('/categories');
  },

  update(data) {
    return api.put(`/categories/${data._id}`, data);
  },

  remove(id) {
    return api.delete(`/categories/${id}`);
  }
};