import * as actions from './constants';

export default function categories(state = [], { type, payload }) {
  console.log('in reducer');
  switch (type) {

  case actions.CATEGORY_GET:
    return payload || [];

  case actions.CATEGORY_ADD:
  console.log(state);
  console.log(payload);
  console.log([ ...state, payload ])
  return [ ...state, payload ];
  
  case actions.CATEGORY_REMOVE:
  return state.filter(category => category.id !== payload.id);
  
  case actions.CATEGORY_UPDATE:
  console.log(state);
  console.log(payload);
  console.log([ ...state, payload ])
    return state.map(category => category.id === payload.id ? { ...category, ...payload } : category);

  default:
    return state;
  }
}