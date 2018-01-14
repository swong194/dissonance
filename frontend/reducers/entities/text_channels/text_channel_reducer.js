import {
  RECEIVE_TEXT_CHANNELS, RECEIVE_TEXT_CHANNEL,
  REMOVE_TEXT_CHANNEL
} from '../../../actions/text_channel_actions';
import { merge } from 'lodash';
import { RECEIVE_USER } from '../../../actions/session_actions';

const oldState = {};

const TextChannelReducer = (state = oldState, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_TEXT_CHANNELS:
      return action.channels;
    case RECEIVE_TEXT_CHANNEL:
      return Object.assign({}, state, {[action.channel.id]: action.channel});
    case REMOVE_TEXT_CHANNEL:
      newState = merge({}, state);
      delete newState[action.textChannelId];
      return newState;
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

export default TextChannelReducer;
