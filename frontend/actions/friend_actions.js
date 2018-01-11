import * as FriendsAPIUtil from '../util/friends_api_util';

export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS';
export const RECEIVE_FRIEND = 'RECEIVE_FRIEND';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveFriends = friends => {
  return {
    type: RECEIVE_FRIENDS,
    friends
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const receiveFriend = friendId => {
  return{
    type: RECEIVE_FRIEND,
    friendId
  };
};

export const removeFriend = friendId => {
  return{
    type: REMOVE_FRIEND,
    friendId
  };
};

export const fetchFriends = () => dispatch => {
  return FriendsAPIUtil.fetchFriends().then(
    friends => dispatch(receiveFriends(friends)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const fetchFriend = id => dispatch => {
  return FriendsAPIUtil.fetchFriend(id).then(
    friend => dispatch(receiveFriend(friend)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const createFriend = name => dispatch => {
  return FriendsAPIUtil.createFriend(name).then(
    friend => {
      dispatch(receiveFriend(friend));
      return friend.friendId;
    },
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const deleteFriend = id => dispatch => {
  return FriendsAPIUtil.deleteFriend(id).then(
    () => dispatch(removeFriend(id)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};
