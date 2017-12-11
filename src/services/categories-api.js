import request from '../utils/request';

export default {
  get: () => (
    request.get('/categories')
  ),
  add: ({ name, amount }) => (
    request.post('/categories', { name, amount })
  ),
  update: ({ _id, name, amount }) => (
    request.put(`/categories/${_id}`, { name, amount })
  ),
  remove: (_id) => (
    request.delete(`/categories/${_id}`)
  )
};