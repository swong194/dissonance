import { RECEIVE_ERRORS } from '../../actions/session_actions';

const defaultState = [];

const ErrorsReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return defaultState;
  }
};

export default ErrorsReducer;
