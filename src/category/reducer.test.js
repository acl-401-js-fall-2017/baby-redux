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
      budget: 500
    };
    const state = reducer([],{ type: actions.CATEGORY_ADD, payload: category });
    expect(state).toEqual([category]);
  });

  it('updates a category', () => {
    const category = { 
      _id:'5a1dde786f71da3feb306481',
      name: 'vacation',
      budget: 500
    };
    const state = reducer([category],
      { type: actions.CATEGORY_UPDATE, 
        payload: {
          _id: '5a1dde786f71da3feb306481', 
          name: 'groceries', 
          budget: 200 }
      });  
    expect(state).toEqual([{ ...category, name: 'groceries', budget: 200 }]) ; 
  });

  it('removes a category by id', () => {
    const category = {
      _id:'5a1dde786f71da3feb306481',
      name: 'vacation',
      budget: 500
    };
    const state = reducer([category], { type: actions.CATEGORY_REMOVE, payload: category._id });
    expect(state).toEqual([]);
  });
});