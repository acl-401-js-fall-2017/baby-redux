import * as actions from './constants';

export function categoryReducer(state = [], { type, payload }) {  //destructured "action"
  switch(type) {
    case actions.CATEGORY_LOAD:
      return payload;

    case actions.CATEGORY_ADD:
      return  [
        ...state,
        payload
      ];

    case actions.CATEGORY_UPDATE:
      return state.map(category => {
        return  category._id === payload._id ? { ...category, ...payload } : category;
      });

    case actions.CATEGORY_REMOVE:
      return state.filter(category => category._id !== payload);

    default: 
      return state;
  }
}
