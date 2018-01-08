import { connect } from 'react-redux';
import ServerIndex from './server_index';
import { logoutUser } from '../../actions/session_actions';
import {
  fetchServers,
  joinServer,
  createServer
  } from '../../actions/server_actions';
import { serverArray } from '../../util/selectors_util';
import { dispatchModal } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    servers: serverArray(state),
    serverFormModalOpen: state.ui.serverFormModalOpen,
    errors: state.session.errors,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser()),
    fetchServers: () => dispatch(fetchServers()),
    joinServer: name => dispatch(joinServer(name)),
    createServer: server => dispatch(createServer(server)),
    dispatchModal: modalType => dispatch(dispatchModal(modalType))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex);
