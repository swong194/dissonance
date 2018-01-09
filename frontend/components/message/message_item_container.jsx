import { connect } from 'react-redux';
import MessageItem from './message_item';
import { fetchUser } from '../../actions/user_actions';
import { fetchServer } from '../../actions/server_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return{
    message: ownProps.message,
    users: ownProps.users,
    usersIds: ownProps.usersIds,
    serverId: ownProps.match.params.serverId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: id => dispatch(fetchUser(id)),
    fetchServer: id => dispatch(fetchServer(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageItem));
