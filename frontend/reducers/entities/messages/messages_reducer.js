import { RECEIVE_MESSAGES, RECEIVE_MESSAGE } from '../../../actions/message_actions';
import { RECEIVE_USER } from '../../../actions/session_actions';

const oldState = {};

const MessagesReducer = (state = oldState, action) => {
  switch (action.type) {
    case RECEIVE_MESSAGES:
      return action.messages;
    case RECEIVE_MESSAGE:
      return Object.assign({}, state, {[action.message.id]: action.message});
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

export default MessagesReducer;
