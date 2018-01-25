import { RECEIVE_MODAL, REMOVE_MODAL } from '../actions/ui_actions';
import { RECEIVE_MESSAGE } from '../actions/message_actions';
import { RECEIVE_ERRORS, REMOVE_ERRORS } from '../actions/error_actions';

const oldState = {};

const UiReducer = (state = oldState, action) => {
  switch (action.type) {
    case RECEIVE_MODAL:
      return Object.assign({}, oldState, {[action.modalType]: true});
    case REMOVE_MODAL:
      return Object.assign({}, oldState, {[action.modalType]: false});
    case REMOVE_ERRORS:
      return state;
    case RECEIVE_ERRORS:
      return state;
    case RECEIVE_MESSAGE:
      return state;
    default:
      return oldState;
  }
};

export default UiReducer;
