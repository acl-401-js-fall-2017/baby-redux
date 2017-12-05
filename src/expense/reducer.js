import * as actions from '../category/constants';

export default function expenses(state = [], { type, payload }) {

  switch(type) {
    case actions.EXPENSE_LOAD:
      return payload;
    case actions.EXPENSE_ADD:
      return [
        ...state,
        payload
      ];
    case actions.EXPENSE_REMOVE:
      return state.filter(e => e._id !== payload._id);
    case actions.EXPENSE_UPDATE:
      return state.map(e => e._id === payload._id ? { ...e, ...payload } : e);
        
    default:
      return state;
  }
}