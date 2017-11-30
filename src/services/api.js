const url = '/api';

const wrap = promise => {
  return promise.then(response => {
     console.log(`response......${JSON.stringify(response)}`);
     return  response.json()
    });
};

export default {
  get(path) {
    console.log(`path.....${url}${path}` )
    return wrap(
      fetch(`${url}${path}`, {
        method: 'get',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
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
  }
};