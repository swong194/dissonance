import React from 'react';

class FriendIndexItem extends React.Component{
  render(){
    return(
      <div className='friend-index-item'>
        <button className='friend-item-message' onClick={this.props.createDirectMessage}>
          <p>{this.props.user.username}</p>
        </button>
        <button className='friend-item-remove' onClick={this.props.removeFriend}>
          <i className="fa fa-minus-square" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
}

export default FriendIndexItem;
