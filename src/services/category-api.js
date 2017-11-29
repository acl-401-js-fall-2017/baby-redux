import api from './api';

export const get = () => api.get('/categories');

export const add = category => api.post('/categories', category);

export const update = (id, update) => api.patch(`/categories/${id}`, update);

export const remove = id => api.remove(`/categories/${id}`);