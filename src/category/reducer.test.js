import reducer from './reducer';
import { CATEGORY_ADD, CATEGORY_REMOVE, CATEGORY_UPDATE } from '../utils/constants';

describe('Category reducer', ()=> {

  it('should initialize', ()=> {
    const state = reducer(undefined, {});
    expect(state).toEqual([]);
  });

  it('should add a category', () => {
    const test = { _id: 123, name: 'hello' };

    const state = reducer([], { type: CATEGORY_ADD, payload: test });

    expect(state).toEqual([{ _id: 123, name: 'hello' }]);
  });

  it('should update a category', () => {
    const test = { _id: 123, name: 'hello' };

    let state = reducer([], { type: CATEGORY_ADD, payload: test });
    const update = { name: 'goodbye' };
    state = reducer(state, { type: CATEGORY_UPDATE, payload: update });

    expect(state).toEqual([{ _id: 123, name: 'hello' }]);
  });

  it('should remove a category', () => {
    const test = { _id: 123, name: 'hello' };
    let state = reducer([], { type: CATEGORY_ADD, payload: test });

    state = reducer(state, { type: CATEGORY_REMOVE, payload: 123 });

    expect(state).toEqual([]);
  });


});