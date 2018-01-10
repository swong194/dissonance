import { RECEIVE_DIRECT_MESSAGES, RECEIVE_DIRECT_MESSAGE } from '../../../actions/direct_message_actions';

const oldState = {};

const DirectMessagesReducer = (state = oldState, action)=>{

  switch (action.type) {
    case RECEIVE_DIRECT_MESSAGES:
      return action.messages;
    case RECEIVE_DIRECT_MESSAGE:
      return Object.assign({}, state, {[action.message.id]: action.message});
    default:
      return state;
  }
};

export default DirectMessagesReducer;
