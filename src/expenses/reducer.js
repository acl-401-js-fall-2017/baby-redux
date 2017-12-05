import * as actions from '../utils/constants';

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