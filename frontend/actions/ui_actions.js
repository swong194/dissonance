export const RECEIVE_MODAL = 'RECEIVE_MODAL';
export const REMOVE_MODAL = 'REMOVE_MODAL';

export const receiveModal = (modalType) => {
  return {
    type: RECEIVE_MODAL,
    modalType
  };
};

export const removeModal = (modalType) => {
  return {
    type: REMOVE_MODAL,
    modalType
  };
};
