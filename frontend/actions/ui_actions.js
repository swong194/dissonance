export const RECEIVE_MODAL = 'RECEIVE_MODAL';
export const REMOVE_MODAL = 'REMOVE_MODAL';

export const receiveModal = (modalType) => {
  return {
    type: RECEIVE_MODAL,
    modalType
  };
};

export const removeModal = () => {
  return {
    type: REMOVE_MODAL,
  };
};

export const dispatchModal = (modalType) => dispatch => {
  if(modalType !== null){
    return dispatch(receiveModal(modalType));
  } else {
    return dispatch(removeModal());
  }
};
