import { RECEIVE_USERS, RECEIVE_CHANNEL_USER } from '../../../actions/user_actions';
import { RECEIVE_USER } from '../../../actions/session_actions';

const oldState = {};

const UsersReducer = (state = oldState, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users;
    case RECEIVE_CHANNEL_USER:
      return Object.assign({}, state, {[action.user.id]: action.user});
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

export default UsersReducer;
