import * as actions from './constants';


export function categories(state = [], { type, payload }) {
  console.log('in category reducr', type);
  
  switch (type) {
  case actions.CATEGORY_ADD:
    return [ 
      ...state, 
      payload
    ];
  case actions.CATEGORY_REMOVE:
    return state.filter(category => category._id !== payload);
  case actions.CATEGORY_UPDATE:
  state.map(category => category._id === payload._id ? { ...category, ...payload } : category);
    return [ ...state ]
  case actions.CATEGORY_LOAD:
    return payload
  default:
    return state;
  }
}

export function loading(state = false, { type }){
  switch(type){
  case actions.LOADING:
    return true;
  case actions.LOADED:
    return false;
  case actions.CATEGORY_ERROR:
    return false;
  default:
    return state;
  }
}

export function error(state = null, { type, payload }) {
  switch(type) {
    case actions.CATEGORY_ERROR:
      return payload;
    case actions.LOADING:
      return null;
    default:
      return state;
  }
}

