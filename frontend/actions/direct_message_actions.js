import * as DirectMessageAPIUtil from '../util/direct_messages_api_util';

export const RECEIVE_DIRECT_MESSAGES = 'RECEIVE_DIRECT_MESSAGES';
export const RECEIVE_DIRECT_MESSAGE = 'RECEIVE_DIRECT_MESSAGE';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

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

export const receiveErrors = errors => {
  return{
    type: RECEIVE_ERRORS,
    errors
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
    message => dispatch(receiveDirectMessage(message)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};
