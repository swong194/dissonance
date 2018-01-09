export const RECEIVE_ACTIVE_CHANNEL = 'RECEIVE_ACTIVE_CHANNEL';

export const receiveActiveChannel = activeId => {
  return {
    type: RECEIVE_ACTIVE_CHANNEL,
    activeId
  };
};


export const dispatchActiveChannel = id => dispatch => {
  return dispatch(receiveActiveChannel(id));
};
