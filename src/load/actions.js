import { RESPONSE_LOAD, PAGE_LOAD, ERROR_LOAD } from './reducer';
import { loadApi } from '../services/loadApi';

export function loadResponse(options) {
  return async dispatch => {
    dispatch ({ type: PAGE_LOAD });

    try {
      const response = await loadApi.get(options);
      dispatch({
        type: RESPONSE_LOAD,
        payload: response
      });
    }
    catch(err) {
      dispatch({
        type: ERROR_LOAD,
        payload: err
      });
      throw err;
    }
  };
}