import { connect } from 'react-redux';
import TextChannelList from './text_channel_list';
import {
  fetchTextChannels, createTextChannel, deleteTextChannel, updateTextChannel,
  receiveTextChannel
} from '../../actions/text_channel_actions';
import { receiveModal, removeModal } from '../../actions/ui_actions';
import { removeErrors } from '../../actions/error_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    textChannels: Object.values(state.entities.textChannels),
    serverId: ownProps.match.params.serverId,
    activeChannel: ownProps.match.params.textChannelId,
    openChannelModal: state.ui.openChannelModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTextChannels: id => dispatch(fetchTextChannels(id)),
    removeErrors: () => dispatch(removeErrors()),
    deleteTextChannel: id => dispatch(deleteTextChannel(id)),
    receiveTextChannel: channel => dispatch(receiveTextChannel(channel)),
    receiveModal: modalType => dispatch(receiveModal(modalType)),
    removeModal: modalType => dispatch(removeModal(modalType))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TextChannelList);
