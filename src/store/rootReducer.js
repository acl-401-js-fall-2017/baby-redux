import { combineReducers } from 'redux';
import { categoryReducer } from '../category/reducer';
import { loadResponse, loadPage, loadError } from '../load/reducer';

const rootReducer = combineReducers({
  categoryReducer,
  loadResponse,
  loadPage,
  loadError,
});

export default rootReducer;