import { connect } from 'react-redux';
import ServerUsersIndex from './server_users_index';
import { withRouter } from 'react-router-dom';
import { fetchUsers } from '../../actions/user_actions';
import { dispatchModal } from '../../actions/ui_actions';
import { createDirectMessage } from '../../actions/direct_message_actions';

const mapStateToProps = (state, ownProps) => {
  let users = [];
  if(Object.values(state.entities.servers).length){
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
    dispatchModal: (modalType) => dispatch(dispatchModal(modalType)),
    createDirectMessage: id => dispatch(createDirectMessage(id))
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerUsersIndex));
