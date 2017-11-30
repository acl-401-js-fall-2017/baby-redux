import reducer, { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE } from './reducer';
import *as actions from './constants';

describe('category reducer', () => {

  it('initializes', () => {
    const state = reducer(undefined, {});
    expect(state).toEqual([]);
  });

  it('adds a new category', () => {
    const category = {
      name: 'vacation',
      budget: '500'
    };
    const state = reducer([],{ type: actions.CATEGORY_ADD, payload: category });
    expect(state).toEqual([category]);
  });

  it()
});