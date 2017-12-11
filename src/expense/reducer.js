import * as actions from '../category/constants';

export function expenseReducer(state = [], { type, payload }) {
  switch(type) {
    case actions.EXPENSE_LOAD:
      return payload;

    case actions.EXPENSE_ADD:
      return [
        ...state,
        payload
      ];

    case actions.EXPENSE_UPDATE:
      return state.map(expense => {
        return  expense._id === payload._id ? { ...expense, ...payload } : expense;
      });

    case actions.EXPENSE_REMOVE:
      return state.filter(expense => expense._id !== payload);

    default: 
      return state;

  }
}