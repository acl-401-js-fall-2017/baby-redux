import reducer from './reducers';
import * as actions from './actions';

describe( 'Categories reducer', ()=> {

    it('Should intialize', () => {
        const state = reducer(undefined, {});
        expect(state).toEqual([]);
    });
})