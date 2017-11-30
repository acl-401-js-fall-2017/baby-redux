import * as actions from '../category/constants';

export default function response(state = null, { type, payload }) {
  switch(type) {
    case actions.RESPONSE_LOAD:
      return payload;
    default: 
      return state;
  }
}

export function loading(state = false, { type }) {
  switch(type) {
    case actions.LOADING:
      return true;
    case actions.RESPONSE_LOAD:
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
    case actions.RESPONSE_LOAD:
    case actions.LOADING:
      return null;
    default:
      return state;
    
  }
}