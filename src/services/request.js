import store from '../store/store';
const url = '/api';

let token = '';

const storage = localStorage;

store.subscribe(() => {
  const { token: newToken } = store.getState().auth;
  if (newToken !== token) {
    token = newToken;
    token ? storage.token = token : storage.clear('token');
  }
});

export const getStoredToken = () => storage.token;

const wrap = cmd => cmd
  .set('Authorization', token)
  .then(res => res.body,
    ({ response }) => {
      const { body, text } = response;
      const error = body ? body.message || body.error || body : text;
      throw error;
    }
  );


export const request = {
  post(path, data) {
    return wrap(fetch(`${path}${url}`).send(data));
  },
  get(path) {
    return wrap(fetch(`${path}${url}`));
  },
  put(path, data) {
    return wrap(fetch(`${path}${url}`).send(data));
  },
  delete(path) {
    return wrap(fetch(`${path}${url}`));
  }
};
