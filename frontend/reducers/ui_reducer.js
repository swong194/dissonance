import { RECEIVE_MODAL } from '../actions/ui_actions';

const oldState = { serverFormModal: false };

const UiReducer = (state = oldState, action) => {
  switch (action.type) {
    case RECEIVE_MODAL:
      return Object.assign({}, oldState, {[action.modalType]: true});
    case REMOVE_MODAL:
      return oldState;
    default:
      return state;
  }
};
