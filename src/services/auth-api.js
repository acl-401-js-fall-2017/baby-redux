import api from './api';

export default {
  verify() {
    return api.get('/auth/verify');
  },
  signin(credentials) {
    return api.post('/auth/signin', credentials);
  },
  signup(user) {
    return api.post('/auth/signup', user);
  },
  getUser() {
    return api.get('/me');
  }
};