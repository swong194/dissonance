import { RECEIVE_FRIENDS, RECEIVE_FRIEND, REMOVE_FRIEND } from '../../../actions/friends_actions';

const oldState = [];

const FriendsReducer = (state = oldState, action) => {
  Object.freeze(state);
  let newState = [];
  switch (action.type) {
    case RECEIVE_FRIENDS:
      return action.friends;
    case RECEIVE_FRIEND:
      newState = oldState.slice();
      if(!newState.includes(action.friendId)){
        newState.push(action.friendId);
      }
      return newState;
    case REMOVE_FRIEND:
      oldState.forEach(friendId => {
        if(friendId !== action.friendId){
          newState.push(friendId);
        }
      });
      return newState;
    default:
      return state;
  }
};
