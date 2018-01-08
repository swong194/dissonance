import { connect } from 'react-redux';
import ServerUsersIndex from './server_users_index';
import { withRouter } from 'react-router-dom';
import { fetchServerUsers } from '../../actions/server_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    serverId: ownProps.match.params.serverId,
    users: Object.values(state.entities.users)
  };
};


const mapDispatchToProps = dispatch => {
  return {
    fetchServerUsers: id => dispatch(fetchServerUsers(id))
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerUsersIndex));
