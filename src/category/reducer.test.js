import reducer from './reducer';
import { CATEGORY_ADD, CATEGORY_REMOVE, CATEGORY_UPDATE } from './constants';

describe('Category reducer', ()=> {

  it('should initialize', ()=> {
    const state = (undefined, {});
    expect(state).toEqual({});
  });

  it('should add a category', () => {
    const test = { _id: 123, name: 'hello' };

    const state = reducer([], { type: CATEGORY_ADD, payload: test });

    expect(state).toEqual([{ _id: 123, name: 'hello' }]);
  });


});