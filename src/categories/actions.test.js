import * as actions from './constants';
import { addCategory, updateCategory, removeCategory } from './actions';


describe('Actions test', () => {

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

    it('Should create a remove action', () => {
        const action = updateCategory({ id: 1 });
        expect(action).toEqual({type: actions.CATEGORY_UPDATE, payload: { id: 1 }});
    })
})