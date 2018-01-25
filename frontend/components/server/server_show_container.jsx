import { connect } from 'react-redux';
import ServerShow from './server_show';

import { updateServer, deleteServer } from '../../actions/server_actions';
import { receiveModal, removeModal } from '../../actions/ui_actions';
import { removeErrors } from '../../actions/error_actions';
import { createTextChannel } from '../../actions/text_channel_actions';

const mapStateToProps = (state, ownProps) => {
  const server = state.entities.servers[ownProps.match.params.serverId] || {name: ''};

  return{
    server,
    updateServerModalOpen: state.ui.updateServerModal,
    deleteServerModalOpen: state.ui.deleteServerModal,
    openTextchannelModal: state.ui.openTextchannelModal,
    updateAndDeleteModal: state.ui.updateAndDeleteModal
  };
};

const mapDispatchToProps = dispatch => {
  return{
    removeErrors: () => dispatch(removeErrors()),
    updateServer: (name, id) => dispatch(updateServer(name, id)),
    deleteServer: id => dispatch(deleteServer(id)),
    receiveModal: type => dispatch(receiveModal(type)),
    removeModal: type => dispatch(removeModal(type)),
    createTextChannel: textChannel => dispatch(createTextChannel(textChannel))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServerShow);
