import request from '../utils/request';

export default {
  get: (query) => (
    request.get('/expenses', query)
  ),
  add: ({ name, amount, category }) => (
    request.post('/expenses', { name, amount, category })
  ),
  update: ({ _id, name, amount }) => (
    request.put(`/expenses/${_id}`, { name, amount })
  ),
  remove: (_id) => (
    request.delete(`/expenses/${_id}`)
  )
};