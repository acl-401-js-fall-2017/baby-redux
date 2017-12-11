import * as ACTIONS from './expense.constants';

export function expenses(state = [], { type, payload }) {
  switch (type) {
    case ACTIONS.EXPENSE_LOAD:
      return payload;
    case ACTIONS.EXPENSE_ADD:
      return [
        ...state,
        payload
      ];
    case ACTIONS.EXPENSE_REMOVE:
      return state.filter(p => p._id !== payload._id);
    case ACTIONS.EXPENSE_UPDATE:
      return state.map(p => p._id === payload._id ? { ...p, ...payload } : p);
    default:
      return state;    
  }
}

export function expensesLoading(state = false, { type }) {
  switch(type){
    case ACTIONS.EXPENSE_LOADING:
      return true;
    case ACTIONS.EXPENSE_LOAD:
    case ACTIONS.EXPENSE_ERROR:
      return false;
    default:
      return state;
  }
}

export function expensesError(state = null, { type, payload }) {
  switch(type) {
    case ACTIONS.EXPENSE_LOAD:
    case ACTIONS.EXPENSE_ADD:
    case ACTIONS.EXPENSE_REMOVE:
    case ACTIONS.EXPENSE_UPDATE:
      return null;
    case ACTIONS.EXPENSE_ERROR:
      return payload;
    default:
      return state;
  }
}