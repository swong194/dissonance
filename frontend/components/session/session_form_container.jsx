import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SessionForm from './session_form';
import { createUser, loginUser } from '../../actions/session_actions';
import { removeErrors } from '../../actions/error_actions';

const mapStateToProps = (state, ownProps) => {
  const formType = ownProps.match.path === '/login' ? 'login' : 'signup';
  const otherPath = ownProps.match.path === '/login' ? '/signup' : '/login';

  return {
    formType,
    errors: state.session.errors,
    number: Math.floor(Math.random()*9),
    otherPath: otherPath
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.match.path === '/login' ? loginUser : createUser;
  return {
    action: user => dispatch(action(user)),
    guestLogin: guest=> dispatch(loginUser(guest)),
    removeErrors: () => dispatch(removeErrors())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
