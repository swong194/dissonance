import { connect } from 'react-redux';
import Greeting from './greeting';
import { logoutUser } from '../../actions/session_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
