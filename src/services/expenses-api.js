import request from '../utils/request';

export default {
  get: () => (
    request.get('/expenses')
  ),
  add: (expense) => (
    request.post('/expenses', { name: expense.name, amount: expense.amount })
  ),
  update: (expense) => (
    request.put(`/expenses/${expense._id}`, { name: expense.name, amount: expense.amount })
  ),
  remove: (id) => (
    request.delete(`/expenses/${id}`)
  )
};