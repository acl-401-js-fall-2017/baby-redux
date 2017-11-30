import * as actions from '../category/constants';
import loadApi from '../services/load.api';



export function loadingResponse(options) {
  return async dispatch => {
    dispatch({
      type: actions.LOADING
    });
    try {
      const response = await loadApi.get(options);
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