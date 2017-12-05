import { RESPONSE_LOADED, PAGE_LOADING, ERROR_LOAD } from '../App/reducer';
import { api } from '../services/api';

export function responseLoadAction() {
  return async dispatch => {
    dispatch ({ type: PAGE_LOADING });

    try {
      const response = await api.get();
      dispatch({
        type: RESPONSE_LOADED,
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