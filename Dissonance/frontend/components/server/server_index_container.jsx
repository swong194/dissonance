import { connect } from 'react-redux';
import ServerIndex from './server_index';
import { logoutUser } from '../../actions/session_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    servers: state.entities.servers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: ()=> dispatch(logoutUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex);
