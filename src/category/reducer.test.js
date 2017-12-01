import reducer from './reducer';
import { CATEGORY_ADD, CATEGORY_REMOVE, CATEGORY_UPDATE } from './constants';

describe('Category reducer', ()=> {

  it('initializes', ()=> {
    const state = reducer(undefined, {});
    expect(state).toEqual([]);
  });

  it('adds a category', () => {
    const test = { _id: 123, name: 'abc' };
    const state = reducer([], { type: CATEGORY_ADD, payload: test });
    expect(state).toEqual([{ _id: 123, name: 'abc' }]);
  });

  it('updates a category', () => {
    const test = { _id: 123, name: 'abc' };
    let state = reducer([], { type: CATEGORY_ADD, payload: test });
    const update = { name: 'goodbye' };
    state = reducer(state, { type: CATEGORY_UPDATE, payload: update });
    expect(state).toEqual([{ _id: 123, name: 'abc' }]);
  });

  it('removes a category', () => {
    const test = { _id: 123, name: 'abc' };
    let state = reducer([], { type: CATEGORY_ADD, payload: test });
    state = reducer(state, { type: CATEGORY_REMOVE, payload: 123 });
    expect(state).toEqual([]);
  });
});