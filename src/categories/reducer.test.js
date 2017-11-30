import reducer from './reducers';
import * as actions from './constants';

describe( 'Categories reducer', ()=> {

    it('Should intialize', () => {
        const state = reducer(undefined, {});
        expect(state).toEqual([]);
    });

    it('Adds a new budget category', () => {
        const testBudget = { name: 'test budget', budget: 100 };
        const state = reducer([], { type: actions.CATEGORY_ADD, payload: testBudget });
        expect(state).toEqual([testBudget]);
    });
})