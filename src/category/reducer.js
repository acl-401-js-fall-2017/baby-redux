import * as actions from '../app/constants';

export default function categories(state = [], { type, payload }) {

  switch(type) {
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
