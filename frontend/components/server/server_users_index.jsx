import React from 'react';
import TextChannelContainer from '../textchannel/text_channel_container';
import { Route } from 'react-router-dom';

class ServerUsersIndex extends React.Component{
  constructor(props){
    super(props);
    // this.handleMessageModal = this.handleMessageModal.bind(this);
  }

  directMessage(id){

  }

  componentWillReceiveProps(newProps){
    if(newProps.serverId !== this.props.serverId){
      this.props.fetchUsers();
    }
  }

  render(){
    let users;
    if(this.props.users.length){
      users = this.props.users.map((user, i) => (
        <div onClick={this.handleMessageModal} key={i} className='server-user-item'><p>{user.username}</p></div>
      ));
    }

    return(
      <div className='channel-components'>
        <Route path='/servers/:serverId/textChannel/:textChannelId' component={TextChannelContainer}/>
      <div className='server-user-index-container'>
        <div className='server-user-index-inner-container'>
        <div className='server-user-heading'>USERS-{this.props.users.length}</div>
        {users}
        </div>
      </div>
    </div>
    );
  }
}

export default ServerUsersIndex;
