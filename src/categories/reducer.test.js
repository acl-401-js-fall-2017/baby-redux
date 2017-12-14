import reducer from './reducer';
import { CATEGORY_ADD, CATEGORY_REMOVE, CATEGORY_UPDATE } from './constants';

describe('categories reducer', () => {

  it('initializes', () => {
    const state = reducer(undefined, {});
    expect(state).toEqual([]);
  });

  it('adds a category', () => {
    const category = { name: 'animals', budget: '3' };
    const state = reducer([], { type: CATEGORY_ADD, payload: category });
    expect(state).toEqual([category]);
  });

  it('removes a category', () => {
    const category = { _id: 123, name: 'animals', budget: '3' };
    const state = reducer([category], { type: CATEGORY_REMOVE, payload: category._id });
    expect(state).toEqual([]);
  });

  it('updates a category', () => {
    const category = { _id: 123, name: 'animals', budget: '3' };
    const state = reducer([category], { 
      type: CATEGORY_UPDATE, 
      payload: { _id: 123, name: 'birds', budget: '4' } 
    });
    expect(state).toEqual([
      { ...category,  name: 'birds', budget: '4' } 
    ]);
  });
});