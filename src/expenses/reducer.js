import * as actions from './constants';

export function expense(state = [], { type, payload }) {
  switch (type) {

    case actions.EXPENSE_LOAD:{
      return payload;
    }
  
    case actions.EXPENSE_ADD:{
      return [
        ...state,
        payload
      ];
    }

    case actions.EXPENSE_REMOVE:{
      return state.filter(e => e._id !== payload);
    }

    case actions.EXPENSE_UPDATE:{
      return state.map(e => e._id === payload._id ? payload : e);
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