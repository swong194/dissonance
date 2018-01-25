export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

import { receiveErrors } from './error_actions';

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

export const fetchMessages = () => dispatch => {
  return MessageAPIUtil.fetchMessages().then(
    messages => dispatch(receiveMessages(messages)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const createMessage = message => dispatch => {
  return MessageAPIUtil.createMessage(message).then(
    resMessage => dispatch(receiveMessage(resMessage)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};
