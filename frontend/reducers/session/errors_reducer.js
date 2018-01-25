import { RECEIVE_ERRORS, REMOVE_ERRORS } from '../../actions/error_actions';

const defaultState = [];

const ErrorsReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case REMOVE_ERRORS:
      return defaultState;
    default:
      return defaultState;
  }
};

export default ErrorsReducer;
