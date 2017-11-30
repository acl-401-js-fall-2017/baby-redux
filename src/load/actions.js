import * as actions from './constants';
import categoryApi from '../services/categories.api';



export function loadingResponse(options) {
  return async dispatch => {
    dispatch({
      type: actions.LOADING
    });
    try {
      const response = await categoryApi.get(options);
      dispatch({
        type: actions.RESPONSE_LOAD,
        payload: response
      });
    }
    catch(err) {
      dispatch({
        type: actions.ERROR,
        payload: err
      });
    }
  };
}