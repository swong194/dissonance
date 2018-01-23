import { connect } from 'react-redux';
import TextChannelList from './text_channel_list';
import {
  fetchTextChannels, createTextChannel, deleteTextChannel, updateTextChannel
} from '../../actions/text_channel_actions';
import { dispatchModal } from '../../actions/ui_actions';

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
    clearErrors: () => dispatch({type: 'CLEAR_ERRORS'}),
    createTextChannel: (textChannel) => dispatch(createTextChannel(textChannel)),
    deleteTextChannel: id => dispatch(deleteTextChannel(id)),
    updateTextChannel: (name, id) => dispatch(updateTextChannel(name, id)),
    dispatchModal: (modalType) => dispatch(dispatchModal(modalType)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TextChannelList);
