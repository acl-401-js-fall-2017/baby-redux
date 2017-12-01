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

    it('Should remove a category', () => {
        const testBudget1 = { _id: 1, name: 'test budget 1', budget: 100 };
        const testBudget2 = { _id: 2, name: 'test budget 2', budget: 200 };
        const state = reducer([testBudget1, testBudget2], { type: actions.CATEGORY_REMOVE, payload: 2 });
        expect(state).toEqual([testBudget1]);
    });

    it('Should update a category', () => {
        const testBudget1 = { id: 1, name: 'test budget 1', budget: 100 };
        const testBudget2 = { id: 2, name: 'test budget 2', budget: 200 };
        const updatedTestBudget2 = { id: 2, name: 'test budget 2', budget: 200 };
        const state = reducer([testBudget1, testBudget2], { type: actions.CATEGORY_UPDATE, payload: { id: 2 } });
        expect(state).toEqual([testBudget1, updatedTestBudget2]);
    });
})