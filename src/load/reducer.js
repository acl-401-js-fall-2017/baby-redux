import * as actions from '../category/actions';

export function loadResponse(state = null, { type, payload }) {
  switch(type) {
    case actions.RESPONSE_LOAD:
      return payload;
    default:
      return state;
  }
}

export function loadPage(state = false, { type, payload }) {
  switch(type) {
    case actions.PAGE_LOAD:
      return true;
    case actions.RESPONSE_LOAD:
    case actions.ERROR_LOAD:
      return false;
    default:
      return state;
  }
}

export function pageError(state = null, { type, payload }) {
  switch(type) {
    case actions.ERROR_LOAD:
      return payload;
    case actions.RESPONSE_LOAD:
    case actions.PAGE_LOAD:
      return null;
    default:
      return state;
  }
}