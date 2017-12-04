
export const CATEGORY_LOAD = 'CATEGORY_LOAD';
export const CATEGORY_ADD = 'CATEGORY_ADD';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';
export const CATEGORY_REMOVE = 'CATEGORY_REMOVE';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';

export function categories(state = [], { type, payload }) {
  switch (type) {
    case CATEGORY_LOAD:
      return payload;

    case CATEGORY_ADD:
      return [
        ...state,
        payload
      ];
    
    case CATEGORY_REMOVE:
      return state.filter(c => c._id !== payload);
    
    case CATEGORY_UPDATE:
      return state.map(c => c._id === payload._id ? { ...c, ...payload } : c);

    default: return state;
  }
}

export function loading(state = false, { type }) {
  switch(type) {
    case LOADING:
      return true;
    case CATEGORY_LOAD:
    case ERROR:
      return false;
    default:
      return state;
  }
}

export function error(state = null, { type, payload }) {
  switch(type) {
    case ERROR:
      return payload;
    case CATEGORY_LOAD:
    case LOADING:
      return null;
    default:
      return state;
  }
}