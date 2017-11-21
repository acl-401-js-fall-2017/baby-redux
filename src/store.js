import { createStore } from 'redux';
import category from './category/reducer';

const store = createStore(category);

export default store;