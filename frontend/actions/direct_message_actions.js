import * as DirectMessageAPIUtil from '../util/direct_messages_api_util';
import { receiveErrors } from './error_actions';
export const RECEIVE_DIRECT_MESSAGES = 'RECEIVE_DIRECT_MESSAGES';
export const RECEIVE_DIRECT_MESSAGE = 'RECEIVE_DIRECT_MESSAGE';

export const receiveDirectMessages = messages => {
  return {
    type: RECEIVE_DIRECT_MESSAGES,
    messages
  };
};

export const receiveDirectMessage = message => {
  return{
    type: RECEIVE_DIRECT_MESSAGE,
    message
  };
};

export const fetchDirectMessages = () => dispatch => {
  return DirectMessageAPIUtil.fetchDirectMessages().then(
    messages => dispatch(receiveDirectMessages(messages)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const fetchDirectMessage = id => dispatch => {
  return DirectMessageAPIUtil.fetchDirectMessage(id).then(
    message => dispatch(receiveDirectMessage(message)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const createDirectMessage = id => dispatch => {
  return DirectMessageAPIUtil.createDirectMessage(id).then(
    message => {
      dispatch(receiveDirectMessage(message));
      return message;
    },
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};
