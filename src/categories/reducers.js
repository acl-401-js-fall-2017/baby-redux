import * as actions from './constants';
import { UPDATE_CATEGORY_EXPENSES, UPDATE_SINGLE_EXPENSE } from '../expenses/constants';

export default function categories(state = [], { type, payload }) {
  switch (type) {

    case actions.CATEGORY_GET:
      return payload || [];

    case actions.CATEGORY_ADD:
      return [ ...state, payload ];
    
    case actions.CATEGORY_REMOVE:
      return state.filter(category => category.id !== payload.id);
    
    case actions.CATEGORY_UPDATE:
      return state.map(category => category.id === payload.id ? { ...category, ...payload } : category);


    case UPDATE_CATEGORY_EXPENSES:
      return state.map(category => category.id === payload.id ? payload : category);

    case UPDATE_SINGLE_EXPENSE:

      return state.map(category => {
        if(category.id === payload.categoryId) 
          return {
            ...category,
            expenses: category.expenses.map(expense => (
              expense._id === payload.expenseId ? 
                { ...expense, ...payload.expenseUpdates } : 
                expense))
          };
        return category;
      });

    default:
      return state;
  }
}