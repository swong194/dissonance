

const ActiveChannelReducer = (state, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNEL:
      return action.channel;
    default:
      return state;
  }
};


export default ActiveChannelReducer;
