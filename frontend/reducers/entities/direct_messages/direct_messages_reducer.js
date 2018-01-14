import { RECEIVE_DIRECT_MESSAGES, RECEIVE_DIRECT_MESSAGE } from '../../../actions/direct_message_actions';
import { RECEIVE_USER } from '../../../actions/session_actions';

const oldState = {};

const DirectMessagesReducer = (state = oldState, action)=>{

  switch (action.type) {
    case RECEIVE_DIRECT_MESSAGES:
      return action.messages;
    case RECEIVE_USER:
      if(action.user === null){
        return oldState;
      } else {
        return state;
      }
    case RECEIVE_DIRECT_MESSAGE:
      return Object.assign({}, state, {[action.message.id]: action.message});
    default:
      return state;
  }
};

export default DirectMessagesReducer;
