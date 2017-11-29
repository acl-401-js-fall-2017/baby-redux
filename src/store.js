import { createStore } from 'redux';
import category from './category/reducer';

const store = createStore(category,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;