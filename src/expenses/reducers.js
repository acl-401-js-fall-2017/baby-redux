import * as actions from './constants';

export function expenses(state = {}, { type, payload }) {
    console.log('in expenses reducr', type);
    
    switch (type) {
    case actions.EXPENSE_ADD:
    state[payload.categoryId] = state[payload.categoryId] ? state[payload.categoryId] : [];
    state[payload.categoryId].push(payload.expense);
      return { ...state };
    case actions.EXPENSE_REMOVE:
    state[payload.categoryId] = state[payload.categoryId].filter(expense => expense._id !== payload.expenseId);
      return { ...state };
    case actions.EXPENSE_UPDATE:
    const newArray = state[payload.categoryId].map(expense => {
      return expense._id === payload.expense._id ? { ...payload.expense } : expense
    });
    state[payload.categoryId] =  newArray;
      return { ...state };
    case actions.EXPENSE_LOAD:
    state[payload.categoryId] = payload.expenses;
      return { ...state };
    default:
      return state;
    }
  }
  
  