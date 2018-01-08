import { combineReducers } from 'redux';
import SessionErrorsReducer from './session/session_errors_reducer';
import EntitiesReducer from './entities/entities_reducer';
import UiReducer from './ui_reducer';
import ActiveChannelReducer from './active_channel_reducer';

export default combineReducers(
  {
    session: SessionErrorsReducer,
    entities: EntitiesReducer,
    ui: UiReducer,
    activeChannel: ActiveChannelReducer
  });
