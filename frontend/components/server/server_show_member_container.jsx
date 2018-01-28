import { connect } from 'react-redux';
import ServerShowMember from './server_show_member';
import { removeServer } from '../../actions/server_actions';
import { withRouter }from 'react-router-dom';
import { receiveModal, removeModal } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  let server = state.entities.servers[ownProps.match.params.serverId] || {name:''};
  return{
    server
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    leaveServer: id => dispatch(removeServer(id)),
    receiveModal: modalType => dispatch(receiveModal(modalType)),
    removeModal: modalType => dispatch(removeModal(modalType))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerShowMember));
