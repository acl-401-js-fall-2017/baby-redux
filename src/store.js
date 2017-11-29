import { createStore } from 'redux';
import categories from './category/reducer';

const store = createStore(categories);

export default store;