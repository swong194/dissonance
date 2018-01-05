import { RECEIVE_MODAL, REMOVE_MODAL } from '../actions/ui_actions';

const oldState = { serverFormModalOpen: false, updateServerModal: false, deleteServerModal: false };

const UiReducer = (state = oldState, action) => {
  switch (action.type) {
    case RECEIVE_MODAL:
      return Object.assign({}, oldState, {[action.modalType]: true});
    default:
      return oldState;
  }
};

export default UiReducer;
