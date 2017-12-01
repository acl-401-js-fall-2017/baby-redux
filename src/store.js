import { createStore } from 'redux';
import budgets from './Category/reducer';

const store = createStore(budgets);

export default store;