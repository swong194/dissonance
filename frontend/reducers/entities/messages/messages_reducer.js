import { RECEIVE_MESSAGES, RECEIVE_MESSAGE } from '../../../actions/message_actions';

const oldState = {};

const MessagesReducer = (state = oldState, action) => {
  switch (action.type) {
    case RECEIVE_MESSAGES:
      return action.messages;
    case RECEIVE_MESSAGE:
      return Object.assign({}, state, {[action.message.id]: action.message});
    default:
      return state;
  }
};

export default MessagesReducer;
