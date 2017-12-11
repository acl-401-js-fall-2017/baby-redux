import superagent from 'superagent';
import store from '../data/store';

let token = '';

const storage = window.localStorage;

store.subscribe(() => {
  // const { token: newToken } = store.getState().auth;
  const { token: newToken } = {};
  if(newToken !== token) {
    token = newToken;
    token? storage.token = token : storage.clear('token');
  }
});

export const getStoredToken = () => storage.token;

export const API_URL = '/api';


const authWrap = cmd => cmd
  .set('Authorization', token)
  .then(
    r => r.body,
    ({ response }) => {
      const { body, text } = response;
      const error = body 
        ? body.message || body.error || body 
        : text;
      throw error;
    }
  );

export default {
  get: (url) => authWrap(superagent.get(`${API_URL}${url}`)),
  post: (url, data) => authWrap(superagent.post(`${API_URL}${url}`).send(data)),
  put: (url, data) => authWrap(superagent.put(`${API_URL}${url}`).send(data)),
  delete: (url) => authWrap(superagent.delete(`${API_URL}${url}`)),
};
