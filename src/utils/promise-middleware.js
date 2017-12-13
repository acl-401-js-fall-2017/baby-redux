import { LOADING, LOADED, CATEGORY_ERROR } from '../categories/constants';
const isPromise = val => val && typeof val.then === 'function';

export default ({ dispatch }) => next => async action => {

  if(!isPromise(action.payload)) return next(action);
  
  const { type, payload } = action;
  dispatch({ type: LOADING });

  try {
    const result = await payload;
    dispatch({ type: LOADED });
    dispatch({
      type,
      payload: result
    });
  }
  catch(err) {
    dispatch({
      type: CATEGORY_ERROR,
      payload: err
    });
  }
};