import * as actions from './constants';

export default function category(state = [], { type, payload }) {  //destructured "action"
  switch(type) {
    case actions.CATEGORY_ADD:
      return  [
        ...state,
        payload
      ];

    default: 
      return state;
  }
}