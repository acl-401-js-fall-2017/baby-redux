import { createStore } from 'redux';
import categoryReducer from './category/reducer';

const store = createStore(categoryReducer);

export default store;

