import React from 'react';
import FriendIndexItem from './friend_index_item';

class FriendsIndex extends React.Component{
  constructor(props){
    super(props);
    this.removeFriend = this.removeFriend.bind(this);
  }

  componentDidMount(){
    this.props.fetchFriends();
  }

  createDirectMessage(friendId){
    return e => {
      this.props.createDirectMessage(friendId).then(
        (server) => this.props.history.push(`/servers/@me/${server.textChannelId}`)
      );
    };
  }

  removeFriend(friendId){
    return e => {
      this.props.removeFriend(friendId);
    };
  }

  render(){
    let friends = null;
    if(Object.keys(this.props.users).length && this.props.friends.length){
      friends = this.props.friends.map(friendId => (
        <FriendIndexItem
          removeFriend={this.removeFriend(friendId)}
          key={friendId}
          friendId={friendId}
          user={this.props.users[friendId]}
          createMessage={this.createDirectMessage(friendId)}/>
      ));
    }
    return(
      <div className='friend-index-container'>
        <div className='friend-index-inner-container'>
          { friends }
        </div>
      </div>
    );
  }
}

export default FriendsIndex;
