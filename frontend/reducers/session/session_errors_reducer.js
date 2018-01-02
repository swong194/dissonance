import { combineReducers } from 'redux';
import ErrorsReducer from './errors_reducer';
import SessionReducer from './session_reducer';

export default combineReducers({
  errors: ErrorsReducer,
  currentUser: SessionReducer
});
