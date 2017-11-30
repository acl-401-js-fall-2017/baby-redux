import * as actions from './constants';

export default function categoryReducer(state = [], { type, payload }) {  //destructured "action"
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
        return  { ...category, ...payload };
      });

    case actions.CATEGORY_REMOVE:
      return state.filter(category => category._id !== payload);

    default: 
      return state;
  }
}

export function categoryLoad(state = false, { type, payload }) {
  switch(type) {
    default:
      return state;
  }
}

export function categoryError(state = null, { type, payload }) {
  switch(type) {
    case actions.CATEGORY_LOAD:
    case actions.CATEGORY_ADD:
    case actions.CATEGORY_UPDATE:
      return null;
    case actions.CATEGORY_REMOVE:
    case actions.CATEGORY_ERROR:
      return payload;
    default:
      return state;
  }
}