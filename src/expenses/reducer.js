import * as actions from './constants';

export function expensesActions(state = [], { type, payload }) {
  switch (type) {
    case actions.EXPENSE_LOAD:
      return payload;
    case actions.EXPENSE_ADD:
      return [
        ...state,
        payload
      ];
    case actions.EXPENSE_REMOVE:
      return state.filter(b => b._id !== payload._id);
    case actions.EXPENSE_UPDATE:
      return state.map(b => b._id === payload._id ? { ...b, ...payload } : b);
    default:
      return state;
  }
}



export function expensesLoading(state = false, { type }) {
  switch(type) {
    case actions.LOADING:
      return true;
    case actions.EXPENSE_LOAD:
      return false;
    default:
      return state;
  }
}

export function expensesError(state = null, { type, payload }) {
  switch(type) {
    case actions.EXPENSE_LOAD:
    case actions.EXPENSE_ADD:
    case actions.EXPENSE_REMOVE:
    case actions.EXPENSE_UPDATE:
      return null;
    case actions.EXPENSE_ERROR:
      return payload;
    default:
      return state;
  }
}