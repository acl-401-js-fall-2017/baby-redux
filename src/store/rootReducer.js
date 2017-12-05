import { combineReducers } from 'redux';
import { categoryReducer } from '../category/reducer';
import { loadSpinner, loadError } from '../App/reducer';

const rootReducer = combineReducers({
  loadSpinner,
  loadError,
  categoryReducer,
});

export default rootReducer;