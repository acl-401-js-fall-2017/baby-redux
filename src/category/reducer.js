import * as actions from './constants';

export function categories(state = null, { type, payload }) {
  switch (type) {
    case actions.CATEGORY_LOAD:
      return payload;
    case actions.CATEGORY_ADD:
      return [
        ...state,
        payload
      ];
    case actions.CATEGORY_REMOVE:
      return state.filter(p => p._id !== payload);
    case actions.CATEGORY_UPDATE:
      return state.map(p =>(
        p._id === payload._id ? { ...p, ...payload } : p
      ));
    default:
      return state;
  }
}

export function error(state= null, { type, payload }) {
  switch(type) {
    case actions.ERROR:
      return payload;
    case actions.LOADING:
      return null;
    default:
      return state;
  }
}

export function loading (state = false, { type }) {
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