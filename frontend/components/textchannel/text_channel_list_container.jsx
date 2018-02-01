import { connect } from 'react-redux';
import TextChannelList from './text_channel_list';
import {
  fetchTextChannels, createTextChannel, updateTextChannel,
  receiveTextChannel, removeTextChannel
} from '../../actions/text_channel_actions';
import { receiveModal, removeModal } from '../../actions/ui_actions';
import { removeErrors, receiveErrors } from '../../actions/error_actions';
import { fetchServer } from '../../actions/server_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    textChannels: Object.values(state.entities.textChannels),
    textChannelIds: Object.keys(state.entities.textChannels),
    serverId: ownProps.match.params.serverId,
    activeChannel: ownProps.match.params.textChannelId,
    openChannelModal: state.ui.openChannelModal,
    deleteChannelModalOpen: state.ui.deleteChannelModalOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTextChannels: id => dispatch(fetchTextChannels(id)),
    removeErrors: () => dispatch(removeErrors()),
    removeTextChannel: id => dispatch(removeTextChannel(id)),
    receiveTextChannel: channel => dispatch(receiveTextChannel(channel)),
    receiveErrors: errors => dispatch(receiveErrors(errors)),
    receiveModal: modalType => dispatch(receiveModal(modalType)),
    removeModal: modalType => dispatch(removeModal(modalType)),
    fetchServer: id => dispatch(fetchServer(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TextChannelList);
