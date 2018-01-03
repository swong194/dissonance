import { combineReducers } from 'redux';
import ServersReducer from './servers/servers_reducer';


export default combineReducers({
  servers: ServersReducer
});
