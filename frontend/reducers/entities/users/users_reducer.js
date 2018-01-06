import { RECEIVE_USERS } from '../../../actions/server_actions';

const oldState = [];

const UsersReducer = (state = oldState, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users;
    default:
      return state;
  }
};

export default UsersReducer;
