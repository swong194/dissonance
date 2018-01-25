import * as TextChannelApi from '../util/text_channel_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_TEXT_CHANNELS = 'RECEIVE_TEXT_CHANNELS';
export const RECEIVE_TEXT_CHANNEL = 'RECEIVE_TEXT_CHANNEL';
export const REMOVE_TEXT_CHANNEL = 'REMOVE_TEXT_CHANNEL';

export const receiveTextChannels = channels => {
  return{
    type: RECEIVE_TEXT_CHANNELS,
    channels
  };
};

export const receiveTextChannel = channel => {
  return{
    type: RECEIVE_TEXT_CHANNEL,
    channel
  };
};

export const removeTextChannel = id => {
  return{
    type: REMOVE_TEXT_CHANNEL,
    textChannelId: id
  };
};

export const fetchTextChannels = id => dispatch => {
  return TextChannelApi.fetchTextChannels(id).then(
    channels => {
      dispatch(receiveTextChannels(channels));
      return channels;
    },
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const fetchTextChannel = id => dispatch => {
  return TextChannelApi.fetchTextChannel(id).then(
    channel => {
      dispatch(receiveTextChannel(channel));
      return channel;
    },
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const createTextChannel = text_channel => dispatch => {
  return TextChannelApi.createTextChannel(text_channel).then(
    channel => {
      dispatch(receiveTextChannel(channel));
      return channel;
    },
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const deleteTextChannel = id => dispatch => {
  return TextChannelApi.deleteTextChannel(id).then(
    channel => dispatch(removeTextChannel(id)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};


export const updateTextChannel = (name, id) => dispatch => {
  return TextChannelApi.updateTextChannel(name, id).then(
    channel => dispatch(receiveTextChannel(channel)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};
