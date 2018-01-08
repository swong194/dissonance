export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

import * as MessageAPIUtil from '../util/message_api_util';

export const receiveMessages = messages =>{
  return {
    type: RECEIVE_MESSAGES,
    messages
  };
};

export const receiveMessage = message => {
  return{
    type: RECEIVE_MESSAGE,
    message
  };
};

export const receiveErrors = errors => {
  return{
    type: RECEIVE_ERRORS,
    errors
  };
};

export const fetchMessages = id => dispatch => {
  return MessageAPIUtil.fetchMessages(id).then(
    messages => dispatch(receiveMessages(messages)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const createMessage = message => dispatch => {
  return MessageAPIUtil.createMessage(message).then(
    message => dispatch(receiveMessage(message)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};
