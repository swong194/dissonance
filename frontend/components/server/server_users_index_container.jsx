import { connect } from 'react-redux';
import ServerUsersIndex from './server_users_index';
import { withRouter } from 'react-router-dom';
import { fetchUsers } from '../../actions/user_actions';
import { receiveModal, removeModal } from '../../actions/ui_actions';
import { createDirectMessage } from '../../actions/direct_message_actions';
import { removeErrors } from '../../actions/error_actions';

const mapStateToProps = (state, ownProps) => {
  let users = [];
  if(Object.values(state.entities.servers).length && Object.values(state.entities.users).length){
    state.entities.servers[ownProps.match.params.serverId].users.forEach(userId =>
      (users.push(state.entities.users[userId]))
    );
  }

  return {
    serverId: ownProps.match.params.serverId,
    users,
    openMessageModal: state.ui.openMessageModal
  };
};


const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    removeModal: modalType => dispatch(removeModal(modalType)),
    receiveModal: modalType => dispatch(receiveModal(modalType)),
    createDirectMessage: id => dispatch(createDirectMessage(id)),
    removeErrors: () => dispatch(removeErrors())
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerUsersIndex));
