import { RECEIVE_MODAL, REMOVE_MODAL } from '../actions/ui_actions';
import { RECEIVE_MESSAGE } from '../actions/message_actions';
import { RECEIVE_ERRORS } from '../actions/message_actions';

const oldState = { serverFormModalOpen: false,
  updateServerModal: false,
  deleteServerModal: false,
  openChannelModal: false,
  openMessageModal: false,
  openTextchannelModal: false
};

const UiReducer = (state = oldState, action) => {
  switch (action.type) {
    case RECEIVE_MODAL:
      return Object.assign({}, oldState, {[action.modalType]: true});
    case RECEIVE_ERRORS:
      return state;
    case RECEIVE_MESSAGE:
      return state;
    default:
      return oldState;
  }
};

export default UiReducer;
