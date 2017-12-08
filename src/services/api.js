
const url = '/api';

const asyncWrap = async promise => {
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
    return asyncWrap(
      fetch(`${url}${path}`)
    );
  },
  post(path, data) {
    return asyncWrap(
      fetch(`${url}${path}`, {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
    );
  },
  put(path, data) {
    return asyncWrap(
      fetch(`${url}${path}`, {
        method: 'put',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
    );
  },
  delete(path) {
    return asyncWrap(
      fetch(`${url}${path}`, {
        method: 'delete'
      })    
    );
  }
};