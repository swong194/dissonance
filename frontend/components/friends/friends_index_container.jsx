import { connect } from 'react-redux';
import FriendsIndex from './friends_index';
import { fetchFriends, deleteFriend, createFriend } from '../../actions/friend_actions';
import { createDirectMessage } from '../../actions/direct_message_actions';
import { fetchUser } from '../../actions/user_actions';
import { removeErrors } from '../../actions/error_actions';

export const mapStateToProps = state => {
  return{
    users: state.entities.users,
    friends: state.entities.friends,
    errors: state.session.errors
  };
};

export const mapDispatchToProps = dispatch => {
  return{
    fetchFriends: () => dispatch(fetchFriends()),
    removeErrors: () => dispatch(removeErrors()),
    removeFriend: id => dispatch(deleteFriend(id)),
    addFriend: name => dispatch(createFriend(name)),
    createDirectMessage: id => dispatch(createDirectMessage(id)),
    fetchUser: id => dispatch(fetchUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsIndex);
