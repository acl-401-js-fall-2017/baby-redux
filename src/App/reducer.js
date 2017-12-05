import * as actions from '../category/constants';

export function loadSpinner(state = false, { type, payload }) {
  switch(type) {
    case actions.PAGE_LOADING:
      return true;
    case actions.PAGE_LOADED:
      return false;
    case actions.ERROR_LOAD:
      return false;
    default:
      return state;
  }
}

export function loadError(state = null, { type, payload }) {
  switch(type) {
    case actions.ERROR_LOAD:
      return payload;
    case actions.PAGE_LOADING:
      return null;
    default:
      return state;
  }
}