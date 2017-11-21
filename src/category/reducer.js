import * as actions from './constants';

export default function category(state, { type, payload }) {
  switch (type) {

  case actions.CATEGORY_ADD:
    return [
      ...state,
      payload
    ];

  case actions.CATEGORY_REMOVE:
    return state.filter(c => c._id !== payload);

  case actions.CATEGORY_UPDATE:
    return state.map(c => c._id === payload._id ? payload : c);

  default:
    return state;
  }

}