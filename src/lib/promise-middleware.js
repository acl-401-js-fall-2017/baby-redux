import * as actions from '../category/constants';
const isPromise = val => val && typeof val.then === 'function';


export default function promiseMiddleware() {
  return ({ dispatch }) => next => async action => {

    if(!isPromise(action)) return next(action);

    const { type, payload } = action;
    dispatch({
      type: actions.LOADING
    });

    try {
      const result = await payload;
      dispatch({ type: actions.LOADED });
      dispatch({
        type,
        payload: result
      });
    }
    catch(err) {
      dispatch({
        type: actions.ERROR,
        payload: err
      });

      throw err;
    }
  };
}