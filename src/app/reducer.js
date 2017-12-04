import * as actions from '../category/constants';

export function loading(state = false, { type }) {
  switch(type) {
    case actions.LOADING:
      return true;
    case actions.LOADED:
    case actions.ERROR:
      return false;
    default:
      return state;
  }
}

export function err(state = null, { type, payload }) {
  switch(type) {
    case actions.ERROR:
      return payload;
    case actions.LOADING:
      return null;
    default:
      return state;
  }
}