
export default {
  get() {
    return fetch('/api/categories')
      .then(response => response.json());
  },
  post(data) {
    console.log('in api');
    return fetch('/api/categories', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(async (response) => {
        if (response.ok) return response.json();
        const error = await response.json();
        throw error;
      });
  },
  delete(id) {
    return fetch(`/api/categories/${id}`, {
      method: 'delete'
    })
      .then(response => response.json());
  },
  put(id, data) {
    console.log ('in put', 'id= ' ,id, 'data= ', data);
    console.log ('route', `/api/categories/${id}`);
    return fetch(`/api/categories/${id}`, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .catch(err => console.log('err', err));
  }
};