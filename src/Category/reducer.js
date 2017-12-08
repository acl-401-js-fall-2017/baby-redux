import * as actions from './constants';

export function budgetsActions(state = [], { type, payload }) {
  switch (type) {
    case actions.BUDGET_LOAD:
      return payload;
    case actions.BUDGET_ADD:
      return [
        ...state,
        payload
      ];
    case actions.BUDGET_REMOVE:
      return state.filter(b => b._id !== payload._id);
    case actions.BUDGET_UPDATE:
      return state.map(b => b._id === payload._id ? { ...b, ...payload } : b);
    default:
      return state;
  }
}



export function budgetsLoading(state = false, { type }) {
  switch(type) {
    case actions.LOADING:
      return true;
    case actions.BUDGET_LOAD:
      return false;
    default:
      return state;
  }
}

export function budgetsError(state = null, { type, payload }) {
  switch(type) {
    case actions.BUDGET_LOAD:
    case actions.BUDGET_ADD:
    case actions.BUDGET_REMOVE:
    case actions.BUDGET_UPDATE:
      return null;
    case actions.BUDGET_ERROR:
      return payload;
    default:
      return state;
  }
}