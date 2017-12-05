import { combineReducers } from 'redux';
import { categoryReducer } from '../category/reducer';
import { loadSpinner, loadError } from '../App/reducer';

const rootReducer = combineReducers({
  categoryReducer,
  loadSpinner,
  loadError
});

export default rootReducer;