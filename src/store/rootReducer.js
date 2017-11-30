import { combineReducers } from 'redux';
import { categoryReducer, categoryLoad, categoryError } from '../category/reducer';

const rootReducer = combineReducers({
  categoryReducer,
  categoryLoad,
  categoryError,
});

export default rootReducer;