export const RESPONSE_LOADED = 'RESPONSE_LOADED';
export const PAGE_LOADING = 'PAGE_LOADING';
export const ERROR_LOAD = 'ERROR_LOAD';

export function loadResponse(state = [], { type, payload }) {
  switch(type) {
    case RESPONSE_LOADED:
      return payload;
    default:
      return state;
  }
}

export function loadSpinner(state = false, { type, payload }) {
  switch(type) {
    case PAGE_LOADING:
      return true;
    case RESPONSE_LOADED:
      return false;
    case ERROR_LOAD:
      return false;
    default:
      return state;
  }
}

export function loadError(state = null, { type, payload }) {
  switch(type) {
    case ERROR_LOAD:
      return payload;
    case RESPONSE_LOADED:
    case PAGE_LOADING:
      return null;
    default:
      return state;
  }
}