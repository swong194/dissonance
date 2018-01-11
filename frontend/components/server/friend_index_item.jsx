import React from 'react';

class FriendIndexItem extends React.Component{
  render(){
    return(
      <div className='friend-index-item'>
        <button onClick={this.props.createDirectMessage}>
          <p>this.props.user.username</p>
        </button>
        <button onClick={this.props.removeFriend}>
          Delete Friend
        </button>
      </div>
    );
  }
}

export default FriendIndexItem;
