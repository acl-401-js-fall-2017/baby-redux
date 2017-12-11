import * as ACTIONS from './category.constants';

export function categories(state = [], { type, payload }) {
  switch (type) {
    case ACTIONS.CATEGORY_LOAD:
      return payload;
    case ACTIONS.CATEGORY_ADD:
      return [
        ...state,
        payload
      ];
    case ACTIONS.CATEGORY_REMOVE:
      return state.filter(p => p._id !== payload._id);
    case ACTIONS.CATEGORY_UPDATE:
      return state.map(p => p._id === payload._id ? { ...p, ...payload } : p);
    default:
      return state;    
  }
}

export function categoriesLoading(state = false, { type }) {
  switch(type){
    case ACTIONS.CATEGORY_LOADING:
      return true;
    case ACTIONS.CATEGORY_LOAD:
    case ACTIONS.CATEGORY_ERROR:
      return false;
    default:
      return state;
  }
}

export function categoriesError(state = null, { type, payload }) {
  switch(type) {
    case ACTIONS.CATEGORY_LOAD:
    case ACTIONS.CATEGORY_ADD:
    case ACTIONS.CATEGORY_REMOVE:
    case ACTIONS.CATEGORY_UPDATE:
      return null;
    case ACTIONS.CATEGORY_ERROR:
      return payload;
    default:
      return state;
  }
}