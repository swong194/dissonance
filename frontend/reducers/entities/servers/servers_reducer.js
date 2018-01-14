import { RECEIVE_SERVERS, RECEIVE_SERVER, REMOVE_SERVER } from '../../../actions/server_actions';
import { merge } from 'lodash';
import { RECEIVE_USER } from '../../../actions/session_actions';

const oldState = {};

const ServersReducer = ( state = oldState, action ) => {
  Object.freeze(state);
  let newState = {};

  switch (action.type) {
    case RECEIVE_SERVERS:
      return action.servers;
    case RECEIVE_SERVER:
      return Object.assign({}, state, {[action.server.id]: action.server});
    case REMOVE_SERVER:
      newState = merge({},state);
      delete newState[action.serverId];
      return newState;
    case RECEIVE_USER:
      if(action.user === null){
        return oldState;
      } else {
        return state;
      }
    default:
      return state;
  }
};


export default ServersReducer;
