import * as actions from '../utils/constants';

export function category(state = [], { type, payload }) {
  switch (type) {

    case actions.CATEGORY_LOAD:{
      return payload;
    }
  
    case actions.CATEGORY_ADD:{
      return [
        ...state,
        payload
      ];
    }

    case actions.CATEGORY_REMOVE:{
      return state.filter(c => c._id !== payload);
    }

    case actions.CATEGORY_UPDATE:{
      return state.map(c => c._id === payload._id ? payload : c);
    }

    default:
      return state;
  }
}


export function loading(state = false, { type }) {
  switch (type) {

    case actions.LOADING: {
      return true;
    }

    case actions.DONE_LOADING:
    case actions.ERROR:
      return false;
    default:
      return state;
  }
}


export function error(state = null, { type, payload }) {
  switch (type) {
    case actions.ERROR: {
      return payload;
    }
    case actions.DONE_LOADING:
    case actions.LOADING:
    default:
      return state;
  }
}