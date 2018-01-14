import { RECEIVE_FRIENDS, RECEIVE_FRIEND, REMOVE_FRIEND } from '../../../actions/friend_actions';
import { RECEIVE_USER } from '../../../actions/session_actions';

const oldState = [];

const FriendsReducer = (state = oldState, action) => {
  Object.freeze(state);
  let newState = [];
  switch (action.type) {
    case RECEIVE_FRIENDS:
      return action.friends.friends;
    case RECEIVE_FRIEND:
      newState = state.slice();
      if(!newState.includes(action.friendId.friendId)){
        newState.push(action.friendId.friendId);
      }
      return newState;
    case REMOVE_FRIEND:
      state.forEach(friendId => {
        if(friendId !== action.friendId){
          newState.push(friendId);
        }
      });
      return newState;
    case RECEIVE_USER:
      if(action.user === null){
        return oldState;
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default FriendsReducer;
