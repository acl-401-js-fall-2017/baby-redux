import reducer, { CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE } from './reducer';

describe('Category reducer', ()=> {

  const test = { _id: 123, name: 'abc' };


  it('initializes', ()=> {
    const state = reducer(undefined, {});
    expect(state).toEqual([]);
  });

  it('adds a category', () => {
    const state = reducer([], { type: CATEGORY_ADD, payload: test });
    expect(state).toEqual([{ _id: 123, name: 'abc' }]);
  });

  it('updates a category', () => {
    let state = reducer([], { type: CATEGORY_ADD, payload: test });
    const update = { name: 'goodbye' };
    state = reducer(state, { type: CATEGORY_UPDATE, payload: update });
    expect(state).toEqual([{ _id: 123, name: 'abc' }]);
  });

  it('removes a category', () => {
    let state = reducer([], { type: CATEGORY_ADD, payload: test });
    state = reducer(state, { type: CATEGORY_REMOVE, payload: 123 });
    expect(state).toEqual([]);
  });
});