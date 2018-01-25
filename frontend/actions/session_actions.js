import * as SessionAPIUtil from '../util/session_api_util';
import { receiveErrors } from './error_actions';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const createUser = user => dispatch => {
  return SessionAPIUtil.createUser(user)
  .then(
    resUser => {dispatch(receiveUser(resUser));},
    errors => {dispatch(receiveErrors(errors.responseJSON));}
  );
};

export const loginUser = user => dispatch => {
  return SessionAPIUtil.loginUser(user)
  .then(
    resUser => {dispatch(receiveUser(resUser));},
    errors => {dispatch(receiveErrors(errors.responseJSON));}
  );
};

export const logoutUser = () => dispatch => {
  return SessionAPIUtil.logoutUser().then(user => {
    dispatch(receiveUser(null));
    return user;
  });
};
