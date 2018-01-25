import * as UserAPIUtil from '../util/user_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_CHANNEL_USER = 'RECEIVE_CHANNEL_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';

export const receiveUser = user => {
  return {
    type: RECEIVE_CHANNEL_USER,
    user
  };
};

export const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users
  };
};

export const fetchUser = id => dispatch => {
  return UserAPIUtil.fetchUser(id).then(
    user => dispatch(receiveUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const fetchUsers = () => dispatch => {
  return UserAPIUtil.fetchUsers().then(
    users => dispatch(receiveUsers(users)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};
