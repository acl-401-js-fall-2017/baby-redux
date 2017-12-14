import * as actions from './constants';

export function categoriesActions(state = [], { type, payload }) {
  switch (type) {
    case actions.CATEGORY_LOAD:
      return payload;
    case actions.CATEGORY_ADD:
      return [
        ...state,
        payload
      ];
    case actions.CATEGORY_REMOVE:
      return state.filter(c => c._id !== payload._id);
    case actions.CATEGORY_UPDATE:
      return state.map(c => c._id === payload._id ? { ...c, ...payload } : c);
    default:
      return state;
  }
}



export function categoriesLoading(state = false, { type }) {
  switch(type) {
    case actions.LOADING:
      return true;
    case actions.CATEGORY_LOAD:
      return false;
    default:
      return state;
  }
}

export function categoriesError(state = null, { type, payload }) {
  switch(type) {
    case actions.CATEGORY_LOAD:
    case actions.CATEGORY_ADD:
    case actions.CATEGORY_REMOVE:
    case actions.CATEGORY_UPDATE:
      return null;
    case actions.CATEGORY_ERROR:
      return payload;
    default:
      return state;
  }
}