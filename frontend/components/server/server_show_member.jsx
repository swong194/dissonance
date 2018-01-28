import React from 'react';
import Modal from 'react-modal';

class ServerShowMember extends React.Component{
  constructor(props){
    super(props);
    this.leaveServer = this.leaveServer.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  leaveServer(){
    this.props.leaveServer(this.props.server.id);
  }

  openModal(){
    this.props.receiveModal('leaveServerModalOpen');
  }

  closeModal(){
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
          <button onClick={this.openModal}>
            <i class="fa fa-sign-out" aria-hidden="true"></i>
          </button>
        </div>

        <Modal className={{base:'member-leave-modal',
          afterOpen: '',
          beforeClose: ''}}
          style={{overlay:{ backgroundColor: 'rgba(0,0,0,.8)'} } }
          ariaHideApp={false} isOpen={this.props.leaveServerModalOpen}>
          <div className='leave-modal-container'>
            <div className='leave-modal-inner-container'>

            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ServerShowMember;
