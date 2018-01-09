import React from 'react';

class MessageItem extends React.Component{
  constructor(props){
    super(props);
    this.checkUser = this.checkUser.bind(this);
  }

  checkUser(authorId){
    if(this.props.usersIds.includes(authorId)){
      return this.props.users[this.props.message.author_id].username;
    } else {
      this.props.fetchUser(authorId);
      this.props.fetchServer(this.props.serverId);
    }
  }

  render(){
    return(
      <div key={this.props.message.id} className='message-container'>
        <div className='message-inner-container'>
          <div className='message-header'>
            <p>{this.checkUser(String(this.props.message.author_id))}</p>
            <div className='message-creation'>{this.props.message.created_at}</div>
          </div>
          <div className='message-body'>
            <p>{this.props.message.body}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MessageItem;
