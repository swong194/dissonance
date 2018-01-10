import { combineReducers } from 'redux';
import ServersReducer from './servers/servers_reducer';
import UsersReducer from './users/users_reducer';
import TextChannelsReducer from './text_channels/text_channel_reducer';
import MessagesReducer from './messages/messages_reducer';
import DirectMessagesReducer from './direct_messages/direct_messages_reducer';

export default combineReducers({
  servers: ServersReducer,
  users: UsersReducer,
  textChannels: TextChannelsReducer,
  messages: MessagesReducer,
  directMessages : DirectMessagesReducer
});
