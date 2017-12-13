import * as actions from './constants';


export const categories = (state = [], { type, payload }) => {
  switch (type) {
  case actions.CATEGORY_ADD:
    return [ ...state, payload ];
  case actions.CATEGORY_REMOVE:
    return state.filter(category => category._id !== payload);
  case actions.CATEGORY_UPDATE:
    return state.map(category => category._id === payload._id ? { ...category, ...payload } : category);
  case actions.CATEGORY_LOAD:
    return payload
  default:
    return state;
  }
}

export const loading = (state = false, { type }) =>{
  switch(type){
  case actions.LOADING:
    return true;
  case actions.LOADED:
  case actions.CATEGORY_ERROR:
    return false;
  default:
    return state;
  }
}

export const error = (state = null, { type, payload }) => {
  switch(type) {
    case actions.CATEGORY_ERROR:
      return payload;
    case actions.LOADING:
      return null;
    default:
      return state;
  }
}

