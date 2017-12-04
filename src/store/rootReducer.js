import { combineReducers } from 'redux';
import { categoryReducer } from '../category/reducer';
import { loadResponse, loadPage, loadError } from '../load/reducer';

const rootReducer = combineReducers({
  loadResponse,
  loadPage,
  loadError,
  categoryReducer,
});

export default rootReducer;