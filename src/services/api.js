import store from '../store/store';

const url = '/api';

let token = '';
const storage = window.localStorage;

store.subscribe(() => {
  const { token: newToken } =store.getStore().auth;
  if(newToken !== token) {
    token = newToken;
    token ? storage.token = token : storage.clear('token');
  }
});

export const getStoredToken = () => storage.token;

const wrap = async promise => {
  const response = await promise;
  if(response.ok) return response.json();

  const contentType = response.headers.get('content-type');

  const error = contentType && contentType.startsWith('application/json')
    ? await response.json()
    : await response.text();
  throw error;
};

export default {
  get(path) {
    return wrap(
      fetch(`${url}${path}`), {
        credentials: 'include',
        headers: {
          'Authorization': `${token}`
        }
      }
    );
  },
  
  post(path, data) {
    return wrap(
      fetch(`${url}${path}`, {
        credentials: 'include',
        method: 'post',
        body: JSON.stringify(data),
        headers: {
          'Authorization': `${token}`, 
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
    );
  },
  delete(path) {
    return wrap(
      fetch(`${url}${path}`, {
        credentials: 'include',
        method: 'delete',
        headers: {
          'Authorization': `${token}`,
        }
      })
    );
  },

  put(path, data) {
    return wrap(
      fetch(`${url}${path}`,{
        credentials: 'include',
        method: 'put',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `${token}`
        }
      })
    );
  }
};