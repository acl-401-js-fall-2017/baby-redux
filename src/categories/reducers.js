import * as actions from './constants';
import { UPDATE_EXPENSES } from '../expenses/constants';

export default function categories(state = [], { type, payload }) {
  switch (type) {

    case actions.CATEGORY_GET:
      return payload || [];

    case actions.CATEGORY_ADD:
      return [ ...state, payload ];
    
    case actions.CATEGORY_REMOVE:
      return state.filter(category => category.id !== payload.id);
    
    case actions.CATEGORY_UPDATE:
      return state.map(category => category.id === payload.id ? { ...category, ...payload } : category);


    case UPDATE_EXPENSES:
      return state.map(category => category.id === payload.id ? payload : category);

    default:
      return state;
  }
}