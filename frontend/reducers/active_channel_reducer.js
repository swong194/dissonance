import { RECEIVE_ACTIVE_CHANNEL } from '../actions/active_channel_actions';

const oldState = null;

const ActiveChannelReducer = (state = oldState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ACTIVE_CHANNEL:
      return action.channel;
    default:
      return state;
  }
};


export default ActiveChannelReducer;
