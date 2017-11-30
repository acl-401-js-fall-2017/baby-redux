import reducer from './reducers';
import * as actions from './constants';
import { addCategory, updateCategory, removeCategory } from './actions';


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
        const testBudget1 = { id: 1, name: 'test budget 1', budget: 100 };
        const testBudget2 = { id: 2, name: 'test budget 2', budget: 200 };
        const state = reducer([testBudget1, testBudget2], { type: actions.CATEGORY_REMOVE, payload: { id: 2 } });
        expect(state).toEqual([testBudget1]);
    });

    it('Should update a category', () => {
        const testBudget1 = { id: 1, name: 'test budget 1', budget: 100 };
        const testBudget2 = { id: 2, name: 'test budget 2', budget: 200 };
        const updatedTestBudget2 = { id: 2, name: 'test budget 2', budget: 200 };
        const state = reducer([testBudget1, testBudget2], { type: actions.CATEGORY_UPDATE, payload: { id: 2 } });
        expect(state).toEqual([testBudget1, updatedTestBudget2]);
    });

    it('Should create an add action', () => {
        const testBudget = { name: 'test budget', budget: 100 };
        const action = addCategory(testBudget);
        expect( typeof action.payload.id).toEqual('string');
        expect( typeof action.payload.timestamp).toEqual('object');
        delete action.payload.id; 
        delete action.payload.timestamp;
        expect(action).toEqual( {
            type: actions.CATEGORY_ADD,
            payload: testBudget
        });
    });

    it('Should create an update action', () => {
        const testBudget = { id: 1, name: 'test budget', budget: 100 };
        const action = updateCategory(testBudget);
        expect(action).toEqual({type: actions.CATEGORY_UPDATE, payload: testBudget});
    })

})