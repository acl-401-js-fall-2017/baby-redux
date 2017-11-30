import reducer from './reducer';
import * as actions from './constants';

describe('category reducers', () => {

  it('initializes', () => {
    const state = reducer(undefined, {});
    expect(state).toEqual([]);
  });

  it('adds a category', () => {
    const category = {  name: 'Zach', budget: 1000 };
    const state = reducer([], { type: actions.CATEGORY_ADD, payload: category });
    expect(state).toEqual([category]);
  });

  it('removes a category', () => {
    const category = { _id: 123, name: 'Zach' };
    const state = reducer([], { type: actions.CATEGORY_REMOVE, payload: category._id });
    //const state = reducer([category], { type: actions.CATEGORY_REMOVE, payload: category._id });
    expect(state).toEqual([]);
  });

  it('updates a category', () => {
    const category = { _id: 123, name: 'Zach' };
    const state = reducer([category], {
      type: actions.CATEGORY_UPDATE,
      payload: { _id: 123, name: 'Hello' }
    });
    expect(state).toEqual([
      { ...category, name: 'Hello' }
    ]);
  });
});