import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE, CATEGORY_ERROR } from './constants';

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

export function categoriesLoading(state = false, { type, payload }) {
  switch(type) {
  default:
    return state;
  }
}

export function categoriesError(state = null, { type, payload }) {
  switch(type) {
  case CATEGORY_LOAD:
  case CATEGORY_ADD:
  case CATEGORY_REMOVE:
  case CATEGORY_UPDATE:
    return null;
  case CATEGORY_ERROR:
    return payload;
  default:
    return state;
  }
}