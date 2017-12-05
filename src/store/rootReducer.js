import { combineReducers } from 'redux';
import { categoryReducer } from '../category/reducer';
import { loadResponse, loadSpinner, loadError } from '../App/reducer';

const rootReducer = combineReducers({
  loadResponse,
  loadSpinner,
  loadError,
  categoryReducer,
});

export default rootReducer;