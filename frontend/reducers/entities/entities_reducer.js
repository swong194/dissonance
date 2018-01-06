import { combineReducers } from 'redux';
import ServersReducer from './servers/servers_reducer';
import UsersReducer from './users/users_reducer';

export default combineReducers({
  servers: ServersReducer,
  users: UsersReducer
});
