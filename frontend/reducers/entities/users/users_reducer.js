import { RECEIVE_USERS, RECEIVE_CHANNEL_USER } from '../../../actions/user_actions';

const oldState = {};

const UsersReducer = (state = oldState, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users;
    case RECEIVE_CHANNEL_USER:
      return Object.assign({}, state, {[action.user.id]: action.user});
    default:
      return state;
  }
};

export default UsersReducer;
