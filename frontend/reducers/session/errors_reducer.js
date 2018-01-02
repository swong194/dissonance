import { RECEIVE_ERRORS } from '../../actions/session_actions';

const ErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return [];
  }
};

export default ErrorsReducer;
