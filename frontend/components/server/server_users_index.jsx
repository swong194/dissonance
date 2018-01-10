import React from 'react';
import TextChannelContainer from '../textchannel/text_channel_container';
import { Route } from 'react-router-dom';
import Modal from 'react-modal';

class ServerUsersIndex extends React.Component{
  constructor(props){
    super(props);
    this.handleMessageModal = this.handleMessageModal.bind(this);
    this.state = { user: 'demo' };
  }

  directMessage(id){

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
    }
  }

  render(){
    let users;
    if(this.props.users.length){
      users = this.props.users.map((user, i) => (
        <div onClick={this.handleMessageModal(user)} key={i} className='server-user-item'><p>{user.username}</p></div>
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




      <Modal isOpen={this.props.openMessageModal}
        style={{overlay:{ backgroundColor: 'rgba(0,0,0,.8)'} } }
        ariaHideApp={false}
        className={ { base: 'message-modal', afterOpen: '', beforeClose: ''}  } >

        <div className='message-modal-container'>
          <div className='message-modal-inner-container'>
            <button onClick={this.props.dispatchModal}>CLOSE ME</button>
            HELLO FROM MESSAGE MODAL
            <p>{this.state.user.username}</p>
          </div>
        </div>
        
      </Modal>

    </div>
    );
  }
}

export default ServerUsersIndex;
