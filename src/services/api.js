const url = '/api';

const wrap = async promise => {
  const response = await promise;
  if(response.ok) return response.json();

  const contentType = response.headers.get('content-type');

  const error = contentType && contentType.startsWith('application/json') 
    ? await response.json()
    : await response.text();
  
  return error;

};

export default {

  get(path) {
    return wrap(
      fetch(`${url}${path}`)
    );
  },

  post(path, data) {
    return wrap(
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

  delete(path) {
    return wrap(
      fetch(`${url}${path}`, {
        method: 'delete'
      })
    );
  },

  put(path, data) {
    return wrap(
      fetch(`${url}${path}`, {
        method: 'put',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
    );
  }

};