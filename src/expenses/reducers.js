import * as actions from './constants';

export const expenses =(state = {}, { type, payload }) => {
    switch (type) {
    case actions.EXPENSE_ADD:
    state[payload.categoryId] = state[payload.categoryId] ? state[payload.categoryId] : [];
    state[payload.categoryId].push(payload.expense);
      return { ...state };
    case actions.EXPENSE_REMOVE:
    state[payload.categoryId] = state[payload.categoryId].filter(expense => expense._id !== payload.expenseId);
      return { ...state };
    case actions.EXPENSE_UPDATE:
    state[payload.categoryId] = state[payload.categoryId].map(expense =>  expense._id === payload.expense._id ? { ...payload.expense } : expense);
      return { ...state };
    case actions.EXPENSE_LOAD:
    state[payload.categoryId] = payload.expenses;
      return { ...state };
    default:
      return state;
    }
  }
  
  