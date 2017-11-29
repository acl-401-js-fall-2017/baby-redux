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
    console.log();
    expect(state).toEqual([category]);
  });
});