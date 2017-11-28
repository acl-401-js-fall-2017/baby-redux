import shortid from 'shortid';
import * as actions from './constants';

export const addCategory = ({ name, budget }) => {
  return {
    type: actions.CATEGORY_ADD,
    payload: {
      id: shortid.generate(),
      timestamp: new Date(),
      name,
      budget
    }
  };
}

export const removeCategory = ({ id }) => {
  return { type: actions.CATEGORY_REMOVE, payload: { id }};
}

export const updateCategory = (category) => {
  return { type: actions.CATEGORY_UPDATE, payload: category
  };
}