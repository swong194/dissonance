import { connect } from 'react-redux';
import FriendsIndex from './friends_index';
import { fetchFriends, removeFriend, createFriend } from '../../actions/friend_actions';
 import { createDirectMessage } from '../../actions/direct_message_actions';

export const mapStateToProps = state => {
  return{
    users: state.entities.users,
    friends: state.entities.friends
  };
};

export const mapDispatchToProps = dispatch => {
  return{
    fetchFriends: () => dispatch(fetchFriends()),
    removeFriend: id => dispatch(removeFriend(id)),
    addFriend: id => dispatch(createFriend(id)),
    createDirectMessage: id => dispatch(createDirectMessage(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsIndex);
