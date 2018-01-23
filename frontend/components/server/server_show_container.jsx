import { connect } from 'react-redux';
import ServerShow from './server_show';

import { updateServer, deleteServer } from '../../actions/server_actions';
import { RECEIVE_MODAL, receiveModal, removeModal } from '../../actions/ui_actions';
import { createTextChannel } from '../../actions/text_channel_actions';

const mapStateToProps = (state, ownProps) => {
  const server = state.entities.servers[ownProps.match.params.serverId] || {name: ''};

  return{
    server,
    updateServerModalOpen: state.ui.updateServerModal,
    deleteServerModalOpen: state.ui.deleteServerModal,
    openTextchannelModal: state.ui.openTextchannelModal
  };
};

const mapDispatchToProps = dispatch => {
  return{
    updateServer: (name, id) => dispatch(updateServer(name, id)),
    closeModal: () => dispatch(removeModal()),
    clearErrors: () => dispatch({type: 'CLEAR_ERRORS'}),
    deleteServer: id => dispatch(deleteServer(id)),
    deleteServerModal: type => dispatch(receiveModal(type)),
    updateServerModal: type => dispatch(receiveModal(type)),
    createTextChannel: text_channel => dispatch(createTextChannel(text_channel))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServerShow);
