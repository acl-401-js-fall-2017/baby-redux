export function expenses(state = {}, { type, payload }) {
    console.log('in expenses reducr', type);
    
    switch (type) {
    case actions.EXPENSE_ADD:
    state[payload.categoryId].push(payload.newExpense);
      return { ...state };
    case actions.EXPENSE_REMOVE:
    state[payload.categoryId] = state[payload.categoryId].filter(expense => expense._id !== payload.expenseId);
      return { ...state }
    case actions.EXPENSE_UPDATE:
    state[payload.categoryId] = state[payload.categoryId].map(expense => expense._id === payload.expense._Id ? { ...expense, ...payload.expense } : expense);
      return { ...state }
    case actions.EXPENSE_LOAD:
    state[payload.categoryId] = payload.expenses;
      return 
    default:
      return state;
    }
  }
  
  export function loading(state = false, { type }){
    switch(type){
    case actions.LOADING:
      return true;
    case actions.LOADED:
      return false;
    case actions.CATEGORY_ERROR:
      return false;
    default:
      return state;
    }
  }
  
  export function error(state = null, { type, payload }) {
    switch(type) {
      case actions.CATEGORY_ERROR:
        return payload;
      case actions.LOADING:
        return null;
      default:
        return state;
    }
  }
  
  