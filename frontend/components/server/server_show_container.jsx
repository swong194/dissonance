import { connect } from 'react-redux';
import ServerShow from './server_show';

import { updateServer, deleteServer } from '../../actions/server_actions';
import { RECEIVE_MODAL, receiveModal, removeModal } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  const server = state.entities.servers[ownProps.match.params.serverId] || {name: ''};

  return{
    server,
    updateServerModalOpen: state.ui.updateServerModal,
    deleteServerModalOpen: state.ui.deleteServerModal
  };
};

const mapDispatchToProps = dispatch => {
  return{
    updateServer: (name, id) => dispatch(updateServer(name, id)),
    closeModal: () => dispatch(removeModal()),
    deleteServer: id => dispatch(deleteServer(id)),
    deleteServerModal: type => dispatch(receiveModal(type)),
    updateServerModal: type => dispatch(receiveModal(type))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServerShow);
