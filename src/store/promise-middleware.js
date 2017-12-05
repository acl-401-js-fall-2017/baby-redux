import * as actions from '../category/constants';
import { api } from '../services/api';

const isPromise = val => val && typeof val.then === 'function';

export default ({ dispatch }) =>  next => async action => {

  if(!isPromise(action.payload)) return next(action);   // if not a Promise anymore, return the action = payload
  
  const { type, payload } = action;
  console.log('MIDDLEWARE', type, payload);
  dispatch ({ type: actions.PAGE_LOADING });

  try {
    const response = await payload;
    dispatch({ type: actions.PAGE_LOADED });    // dispatch response has loaded, switch spinner off
    dispatch({
      type,                                 // type from action
      payload: response                     // dispatch my payload
    });
  }
  catch(err) {
    dispatch({
      type: actions.ERROR_LOAD,
      payload: err
    });
    throw err;
  }
};