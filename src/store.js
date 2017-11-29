import { createStore, compose } from 'redux';
import categoryReducer from './category/reducer';

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(categoryReducer, composeEnhancers);

export default store;

