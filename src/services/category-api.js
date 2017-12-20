import { request } from './request';

export default {
  get() {
    return request.get('/categories');
  },
  add(category) {
    return request.post('/categories', category);
  },
  remove(id) {
    return request.delete(`/categories/${id}`);
  },
  update(category) {
    return request.put(`/categories/${category._id}`, category);
  }
};