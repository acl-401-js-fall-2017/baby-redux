const url = '/api';

const wrap = promise => {
  return promise.then(response => response.json());
};

export default {

  get(path) {
    return wrap(
      fetch(`${url}${path}`)
    );
  },

  post(path, data) {
    console.log(`in api, posting ${JSON.stringify(data)} to ${url}${path}`);
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
      })
    );
  }

};