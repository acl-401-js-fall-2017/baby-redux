import * as actions from './constants';
import authApi from '../services/auth-api';
import { getStoredToken } from '../services/api'; 

export function checkForToken() {
  return dispatch => {
    const token = getStoredToken();
    if(!token) {
      dispatch({ type: actions.CHECKED_TOKEN });
      return;
    }
    dispatch({ type: actions.GOT_TOKEN, payload: token });
    
    dispatch({ 
      type: actions.FETCHED_USER,
      payload: authApi.verify.then(() => authApi.getUser())
    });
  };
}

export function signin(credentials) {
  return dispatch => {
    dispatch({ 
      type: actions.GOT_TOKEN,
      payload: authApi.signin(credentials).then(({ token }) => token)
    });

    dispatch({ type: actions.FETCHED_USER, payload: authApi.getUser() });
  };
}