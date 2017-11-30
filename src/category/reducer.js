import * as actions from './constants';

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


export function loading(state = [], { type }) {

  switch (type) {

    case actions.LOADING: {
      return state;

    }

    default:
      return state;

  }

}