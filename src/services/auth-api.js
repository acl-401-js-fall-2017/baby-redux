import { request } from '../utils/request';

export default {
  verify: () => request.get('/auth/verify'),
  signin: (credentials) => request.post('/auth/signin', credentials),
  signup:(user) => request.post('/auth/signup', user),
  getUser: () => request.get('/me')
};