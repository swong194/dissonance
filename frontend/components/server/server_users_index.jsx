import React from 'react';
import TextChannelContainer from '../textchannel/text_channel_container';
import { Route } from 'react-router-dom';
import Modal from 'react-modal';

class ServerUsersIndex extends React.Component{
  constructor(props){
    super(props);
    this.handleMessageModal = this.handleMessageModal.bind(this);
    this.createMessage = this.createMessage.bind(this);
    this.state = { user: 'demo' };
    this.stopEvent = this.stopEvent.bind(this);
  }

  createMessage(){
    this.props.createDirectMessage(this.state.user.id).then(
      (server) => this.props.history.push(`/servers/@me/${server.textChannelId}`)
    );
  }

  componentWillReceiveProps(newProps){
    if(newProps.serverId !== this.props.serverId){
      this.props.fetchUsers();
    }
  }

  handleMessageModal(user){
    return e => {
      this.setState({ user: user });
      this.props.dispatchModal('openMessageModal');
    };
  }

  stopEvent(e){
    e.stopPropagation();
  }

  render(){
    let users;
    if(this.props.users.length){
      users = this.props.users.map((user, i) => (
        <div onClick={this.handleMessageModal(user)} key={user.id} className='server-user-item'><p>{user.username}</p></div>
      ));
    }

    return(
      <div className='channel-components'>
        <Route path='/servers/:serverId/textChannel/:textChannelId' component={TextChannelContainer}/>
      <div className='server-user-index-container'>
        <div className='server-user-heading'>MEMBERS-{this.props.users.length}</div>
        <div className='server-user-index-inner-container'>
        {users}
        </div>
      </div>

      <Modal isOpen={this.props.openMessageModal}
        style={{overlay:{ backgroundColor: 'rgba(0,0,0,.8)'} } }
        ariaHideApp={false}
        className={ { base: 'message-modal', afterOpen: '', beforeClose: ''}  } >

        <div onClick={this.props.dispatchModal} className='message-modal-container'>
          <div onClick={this.stopEvent} className='message-modal-inner-container'>
            <div className='message-modal-top'>
              <p>{this.state.user.username}</p>
              <button onClick={this.props.dispatchModal}><i className="fa fa-times-circle-o" aria-hidden="true"></i></button>
            </div>
            <div className='message-modal-bottom'>
              <button onClick={this.createMessage}><p>Message {this.state.user.username}?</p></button>
            </div>
          </div>
        </div>

      </Modal>

    </div>
    );
  }
}

export default ServerUsersIndex;
