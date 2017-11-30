import { createStore } from 'redux';
import categories from './categories/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__  && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(categories, composeEnhancers);

export default store;
