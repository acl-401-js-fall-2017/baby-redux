import * as actions from './constants';

export function categories(state = null, { type, payload }) {
  switch (type) {
    case actions.CATEGORY_LOAD:
      return payload;
    case actions.CATEGORY_ADD:
      return [
        ...state,
        payload
      ];
    case actions.CATEGORY_REMOVE:
      return state.filter(p => p._id !== payload);
    case actions.CATEGORY_UPDATE:
      return state.map(p =>(
        p._id === payload._id ? { ...p, ...payload } : p
      ));
    case actions.EXPENSE_ADD:
      return state.map(p =>(
        p._id === payload.categoryId ? { ...p, expenses:[ ...p.expenses, payload.expense] } : p
      ));
    case actions.EXPENSE_REMOVE:
      return state.map(p =>(
        p._id === payload.categoryId ? { ...p, expenses:[ ...p.expenses.filter(e => e._id !== payload.expenseId)] } : p
      ));
    default:
      return state;
  }
}