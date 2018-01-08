import { connect } from 'react-redux';
import TextChannelList from './text_channel_list';
import {
  fetchTextChannels, createTextChannel, deleteTextChannel, updateTextChannel
} from '../../actions/text_channel_actions';

const mapStateToProps = (state, ownProps) => {
  const activeChannel = state.entities.servers[ownProps.match.params.serverId] ?
    state.entities.servers[ownProps.match.params.serverId].text_channels[0] : null;
  return {
    textChannels: Object.values(state.entities.textChannels),
    serverId: ownProps.match.params.serverId,
    activeChannel
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTextChannels: id => dispatch(fetchTextChannels(id)),
    createTextChannel: (text_channel) => dispatch(createTextChannel(text_channel)),
    deleteTextChannel: id => dispatch(deleteTextChannel(id)),
    updateTextChannel: (name, id) => dispatch(updateTextChannel(name, id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TextChannelList);
