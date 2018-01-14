import React from 'react';
import { NavLink } from 'react-router-dom';

class DirectMessageIndex extends React.Component{
  constructor(props){
    super(props);
    this.getChannel = this.getChannel.bind(this);
  }
  componentWillReceiveProps(newProps){
    if(newProps.location.path !== this.props.location.path){
      this.props.fetchDirectMessages();
    }
  }

  componentDidMount(){
    this.props.fetchDirectMessages();
  }

  getChannel(id){
    return e => {
      this.props.fetchTextChannel(id);
    };
  }

  render(){
    let directMessages;

    if(this.props.directMessages.length && Object.values(this.props.users).length){
      directMessages = this.props.directMessages.map(directMessage => (
        <NavLink activeClassName='active-direct-message' className='direct-message-item' onClick={this.getChannel(directMessage.textChannelId)} key={directMessage.id} to={`/servers/@me/${directMessage.textChannelId}`}>
          <p>{this.props.users[directMessage.user].username}</p>
        </NavLink>
      ));
    }

    return (
      <div className='direct-message-container'>
        <div className='direct-message-label'>DIRECT MESSAGES</div>
        {directMessages}
      </div>
    );
  }
}

export default DirectMessageIndex;
