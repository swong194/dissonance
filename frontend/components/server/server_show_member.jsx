import React from 'react';
import Modal from 'react-modal';

class ServerShowMember extends React.Component{
  constructor(props){
    super(props);
    this.leaveServer = this.leaveServer.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  leaveServer(e){
    e.preventDefault();
    this.props.leaveServer(this.props.server.id);
    this.props.history.push('/servers/@me');
  }

  openModal(e){
    e.preventDefault();
    this.props.receiveModal('leaveServerModalOpen');
  }

  closeModal(e){
    e.preventDefault();
    this.props.removeModal('leaveServerModalOpen');
  }

  stopEvent(e){
    e.stopPropagation();
  }

  render(){
    return(
      <div className='server-show-container'>
        <div className='server-show-inner-container'>
          <h1>{this.props.server.name}</h1>
          <button onClick={this.openModal} className='leave-server-button'>
            <p className='leave-server-icon'>
              <i className="fa fa-sign-out" aria-hidden="true"></i>
            </p>
            <div className='server-item-name'><p>Leave Server</p></div>
            <div className='triangle-up'></div>
          </button>
        </div>

        <Modal className={{base:'member-leave-modal',
          afterOpen: '',
          beforeClose: ''}}
          style={{overlay:{ backgroundColor: 'rgba(0,0,0,.8)'} } }
          ariaHideApp={false} isOpen={this.props.leaveServerModalOpen}>
          <div onClick={this.closeModal} className='delete-server-modal-container'>
            <div onClick={this.stopEvent} className='delete-server-modal-inner-container leave-server-modal'>
              <h3>{`Are you sure you want to leave "${this.props.server.name}"?`}</h3>
              <h3>You will be missed.</h3>
              <div className='delete-server-buttons'>
                <div onClick={this.closeModal} className='cancel-button'>Cancel</div>
                <button onClick={this.leaveServer} className='red-button'>Yes</button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ServerShowMember;
