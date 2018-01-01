import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SessionForm from './session_form';
import { createUser, loginUser } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  const formType = ownProps.match.path === '/login' ? 'login' : 'signup';
  return {
    formType,
    errors: state.session.errors,
    number: Math.floor(Math.random()*7)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.match.path === '/login' ? loginUser : createUser;
  return {
    action: user => dispatch(action(user))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
