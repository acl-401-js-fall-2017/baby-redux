import { CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE } from './constants';

export default function categories(state=[], { type, payload }) {
  switch (type) {
  case CATEGORY_ADD:
    return [
      ...state,
      payload
    ];
  case CATEGORY_REMOVE:
    return state.filter(category => category._id !== payload);
  case CATEGORY_UPDATE:
    return state.map(category => category._id === payload._id ? { ...category, ...payload } : category);
  default:
    return state;
  }
}