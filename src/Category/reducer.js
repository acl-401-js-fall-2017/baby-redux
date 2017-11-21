import * as actions from './constants';

export default function budgets(state = [], { type, payload }) {
  switch (type) {
    case actions.BUDGET_ADD:
      return [
        ...state,
        payload
      ];
    case actions.BUDGET_REMOVE:
      return state.filter(b => b._id !== payload);
    case actions.BUDGET_UPDATE:
      return state.map(b => b._id === payload ? { ...b, ...payload } : b);
    default:
      return state;
  }
}