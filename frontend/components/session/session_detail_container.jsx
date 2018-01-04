import { connect } from 'react-redux';
import SessionDetail from './session_detail';
import { logoutUser } from '../../actions/session_actions';

const mapStateToProps = state => {
  return {
    user: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return{
    logoutUser: () => dispatch(logoutUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionDetail);
