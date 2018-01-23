import { connect } from 'react-redux';
import ServerIndex from './server_index';
import { logoutUser } from '../../actions/session_actions';
import {
  fetchServers,
  joinServer,
  createServer,
  removeServer
  } from '../../actions/server_actions';
import { serverArray } from '../../util/selectors_util';
import { dispatchModal } from '../../actions/ui_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchTextChannels } from '../../actions/text_channel_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    servers: serverArray(state),
    serverFormModalOpen: state.ui.serverFormModalOpen,
    errors: state.session.errors,
    serverIds: Object.keys(state.entities.servers)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser()),
    clearErrors: () => dispatch({type: 'CLEAR_ERRORS'}),
    fetchServers: () => dispatch(fetchServers()),
    joinServer: name => dispatch(joinServer(name)),
    createServer: server => dispatch(createServer(server)),
    dispatchModal: modalType => dispatch(dispatchModal(modalType)),
    fetchUsers: () => dispatch(fetchUsers()),
    removeServer: id => dispatch(removeServer(id)),
    fetchTextChannels: id => dispatch(fetchTextChannels(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex);
