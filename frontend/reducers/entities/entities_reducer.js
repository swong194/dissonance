import { combineReducers } from 'redux';
import ServersReducer from './servers/server_reducer';


export default combineReducers({
  server: ServersReducer
});
