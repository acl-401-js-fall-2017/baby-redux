export const CATEGORY_ADD = 'CATEGORY_ADD';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';
export const CATEGORY_REMOVE = 'CATEGORY_REMOVE';

export default function categories(state = [], { type, payload }) {
  switch (type) {
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