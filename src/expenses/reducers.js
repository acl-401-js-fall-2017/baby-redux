import * as actions from './constants';

export function expenses(state = {}, { type, payload }) {
    console.log('in expenses reducr', type);
    
    switch (type) {
    case actions.EXPENSE_ADD:
    state[payload.categoryId] = [];
    console.log('state', state);
    console.log('payload', payload);
    console.log('payload.categoryId', payload.categoryId)
    console.log('state[payload.categoryId]',state[payload.categoryId])
    state[payload.categoryId].push(payload.expense);
      return { ...state };
    case actions.EXPENSE_REMOVE:
    state[payload.categoryId] = state[payload.categoryId].filter(expense => expense._id !== payload.expenseId);
      return { ...state };
    case actions.EXPENSE_UPDATE:
    state[payload.categoryId] = state[payload.categoryId].map(expense => expense._id === payload.expense._Id ? { ...expense, ...payload.expense } : expense);
      return { ...state };
    case actions.EXPENSE_LOAD:
    state[payload.categoryId] = payload.expenses;
      return { ...state };
    default:
      return state;
    }
  }
  
  