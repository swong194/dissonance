import { connect } from 'react-redux';
import ServerIndex from './server_index';
import { logoutUser } from '../../actions/session_actions';
import {
  fetchServers,
  joinServer,
  createServer,
  updateServer,
  deleteServer } from '../../actions/server_actions';
import { serverArray } from '../../util/selectors_util';
import { dispatchModal } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  let servers = [];
  if(ownProps.match.params.serverId){
    activeServer = ownProps.match.params.serverId;
  }
  if(state.entities.servers !== []){
    servers = serverArray(state);
  }
  return {
    currentUser: state.session.currentUser,
    servers,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser()),
    fetchServers: () => dispatch(fetchServers()),
    joinServer: name => dispatch(joinServer(name)),
    createServer: server => dispatch(createServer(server)),
    updateServer: server => dispatch(updateServer(server)),
    deleteServer: id => dispatch(deleteServer(id)),
    dispatchModal: modalType => dispatch(dispatchModal(modalType))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex);
