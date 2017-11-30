import api from './api';
import qs from 'query-string';

export default {
  get(options = {}) {
    return api.get(`/test?${qs.stringify(options)}`);
  }
};

