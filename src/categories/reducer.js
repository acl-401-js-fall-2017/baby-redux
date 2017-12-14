import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE, ERROR, LOADING } from './constants';

export default function categories(state=[], { type, payload }) {
  console.log('in reducer', type);
  switch (type) {
  case CATEGORY_LOAD:
    return payload;
  case CATEGORY_ADD:
    return [
      ...state,
      payload
    ];
  case CATEGORY_REMOVE:
    return state.filter(category => category._id !== payload);
  case CATEGORY_UPDATE:
    console.log('in CAT UPDATE', payload, state);
    return state.map(category => category._id === payload._id ? { ...category, ...payload } : category);
  default:
    return state;
  }
}

export function loading(state = false, { type }) {
  switch(type) {
  case LOADING: 
    return true;
  case CATEGORY_LOAD:
  case ERROR:
    return false;
  default:
    return state;
  }
}

export function error(state = null, { type, payload }) {
  console.log('in ERROR in reducer', payload);
  switch(type) {
  case ERROR:
    return payload;
  case CATEGORY_ADD:
  case CATEGORY_UPDATE:
  case CATEGORY_LOAD:
  case LOADING:
    return null;
  default:
    return state;
  }
}