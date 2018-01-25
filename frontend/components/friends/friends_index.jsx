import React from 'react';
import FriendIndexItem from './friend_index_item';

class FriendsIndex extends React.Component{
  constructor(props){
    super(props);
    this.removeFriend = this.removeFriend.bind(this);
    this.state = { allClass:'friend-all active-all', addClass:'friend-add', addFriend: false, friendName:''};
    this.activeAdd = this.activeAdd.bind(this);
    this.activeAll = this.activeAll.bind(this);
    this.addFriendForm = this.addFriendForm.bind(this);
    this.handleAddFriend = this.handleAddFriend.bind(this);
  }

  componentDidMount(){
    this.props.fetchFriends();
  }

  createDirectMessage(friendId){
    return e => {
      this.props.createDirectMessage(friendId).then(
        (server) =>
          this.props.history.push(`/servers/@me/${server.textChannelId}`)
      );
    };
  }

  activeAdd(e){
    e.preventDefault();
    this.setState({addFriend: true, allClass: 'friend-all', addClass:'friend-add active-add'});
  }

  activeAll(e){
    e.preventDefault();
    this.setState({addFriend: false, allClass: 'friend-all active-all', addClass:'friend-add', friendName: ''});
  }


  removeFriend(friendId){
    return e => {
      e.preventDefault();
      this.props.removeFriend(friendId);
    };
  }

  handleChange(type){
    return e => {
      e.preventDefault();
      this.setState({[type]: e.target.value});
    };
  }

  handleAddFriend(e){
    e.preventDefault();
    this.props.removeErrors();
    this.props.addFriend(this.state.friendName).then(
      friendId => {
        this.setState({friendName: ''});
        this.props.fetchUser(friendId);
      }
    );
  }

  addFriendForm(){
    const errors = this.props.errors.map(error => (
      <span>{error}</span>
    ));
    return(
      <div className='add-friend-form'>
        <form onSubmit={this.handleAddFriend}>
          <input placeholder="Your friend's Username" onChange={this.handleChange('friendName')} value={this.state.friendName}></input>
          <button>Add Friend</button>
        </form>
        <div className='add-friend-errors'>
          {errors}
        </div>
      </div>
    );
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
          createDirectMessage={this.createDirectMessage(friendId)}/>
      ));
    }
    return(
      <div className='friend-index-container'>
        <div className='friend-index-inner-container'>
          <div className='friend-bar'>
            <button onClick={this.activeAdd} className={this.state.addClass}>Add Friend</button>
            <div className='friend-seperator'></div>
            <button onClick={this.activeAll} className={this.state.allClass}>All</button>
          </div>
          <div className='friend-content'>
            { this.state.addFriend ? null : <div className='friend-label'>Friends-{this.props.friends.length}</div>  }
            { this.state.addFriend ? this.addFriendForm() : friends  }
          </div>
        </div>
      </div>
    );
  }
}

export default FriendsIndex;
