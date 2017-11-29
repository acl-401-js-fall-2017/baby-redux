import { get as apiGet, post, patch, remove as apiRemove } from './api';

export const get = () => apiGet('/categories');

export const add = category => post('/categories', category);

export const update = (update) => patch(`/categories/${update.id}`, update);

export const remove = id => apiRemove(`/categories/${id}`);