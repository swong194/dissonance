import React from 'react';
import Modal from 'react-modal';
import { withRouter } from 'react-router-dom';
import ServerShowMemberContainer from './server_show_member_container';

class ServerShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {toggleClass:'no-server-show-options',
      toggleIcon:'fa fa-chevron-down', updateName: '', newChannelName: ''};
    this.handleUpdateModal = this.handleUpdateModal.bind(this);
    this.handleDeleteModal = this.handleDeleteModal.bind(this);
    this.toggleUpdateAndDeleteModal = this.toggleUpdateAndDeleteModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdateChange = this.handleUpdateChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.handleCreateChannelModal = this.handleCreateChannelModal.bind(this);
    this.handleNewChannelName = this.handleNewChannelName.bind(this);
    this.createChannel = this.createChannel.bind(this);
    this.stopEvent = this.stopEvent.bind(this);
  }

  componentWillReceiveProps(newProps){
    const className = newProps.updateAndDeleteModal ? 'server-show-options' : 'no-server-show-options';
    const toggleName = newProps.updateAndDeleteModal ? 'fa fa-times': 'fa fa-chevron-down';
    this.setState({toggleClass: className, toggleIcon: toggleName});
    const stop = 1;
  }

  resetState(){
    this.props.removeModal('updateAndDeleteModal');
    this.setState({toggleClass:'no-server-show-options', toggleIcon:'fa fa-chevron-down', updateName: '', newChannelName: ''});
  }

  handleUpdateChange(e){
    this.setState({updateName: e.target.value});
  }

  handleUpdateModal(){
    this.props.receiveModal('updateServerModal');
    this.resetState();
  }

  handleDeleteModal(){
    this.props.receiveModal('deleteServerModal');
    this.resetState();
  }

  handleDelete(id){
    this.props.deleteServer(id);
  }

  closeModal(type){
    return e => {
      e.preventDefault();
      this.props.removeModal(type);
    };
  }

  handleCreateChannelModal(){
    this.props.receiveModal('openTextchannelModal');
    this.resetState();
  }

  handleUpdate(){
    this.props.removeErrors();
    this.props.updateServer(this.state.updateName, this.props.server.id);
  }

  clearInput(){
    this.setState({updateName: ''});
  }

  toggleUpdateAndDeleteModal(e){
    e.stopPropagation();
    e.preventDefault();
    if(this.props.updateAndDeleteModal){
      this.props.removeModal('updateAndDeleteModal');
    } else {
      this.props.receiveModal('updateAndDeleteModal');
    }
  }

  handleNewChannelName(e){
    e.preventDefault();
    this.setState({newChannelName: e.target.value});
  }

  createChannel(e){
    e.preventDefault();
    this.props.removeErrors();
    this.props.createTextChannel({name: this.state.newChannelName, server_id: this.props.server.id})
    .then(channel => this.props.history.push(`/servers/${channel.server_id}/textChannel/${channel.id}`)
    );
  }

  stopEvent(e){
    e.stopPropagation();
  }

  render(){
    if(this.props.currentUserId !== this.props.server.owner_id){
      return (
        <ServerShowMemberContainer />
      );
    } else {
      return (
        <div className='server-show-container'>
          <div className='server-show-inner-container'>
            <h1>{this.props.server.name}</h1>
            <button className='create-channel' onClick={this.handleCreateChannelModal}>
              <i className="fa fa-plus" aria-hidden="true"></i>
              <div className='server-item-name'><p>Add Channel</p></div>
              <div className='triangle-up'></div>
            </button>
            <button className='server-options' onClick={this.toggleUpdateAndDeleteModal}><p>
              <i className={this.state.toggleIcon} aria-hidden="true">
              </i></p>
              <div className='server-item-name'><p>Server Options</p></div>
              <div className='triangle-up'></div>
            </button>
            <div className={this.state.toggleClass}>
              <button onClick={this.handleUpdateModal} className='grey'><i className="fa fa-pencil" aria-hidden="true"></i> <p>Update Server</p></button>
              <button onClick={this.handleDeleteModal} className='red'><i className="fa fa-trash-o" aria-hidden="true"></i> <p>Delete Server</p></button>
            </div>
          </div>

          <Modal className={{base:'text-channel-modal',
            afterOpen: '',
            beforeClose: ''}}
            style={{overlay:{ backgroundColor: 'rgba(0,0,0,.8)'} } } ariaHideApp={false} isOpen={this.props.openTextchannelModal}>
            <div onClick={this.closeModal('openTextchannelModal')} className='create-channel-container'>
              <div onClick={this.stopEvent} className='create-channel-inner-container'>
                <form onSubmit={this.createChannel}>
                  <input onChange={this.handleNewChannelName} value={this.state.newChannelName} placeholder='#general'/>
                  <button>Create New Channel</button>
                </form>
              </div>
            </div>
          </Modal>

          <Modal className={{base:'serverUpdateModal',
            afterOpen: '',
            beforeClose: ''}}
            style={{overlay:{ backgroundColor: 'rgba(0,0,0,.8)'} } } ariaHideApp={false} isOpen={this.props.updateServerModalOpen}>

            <div onClick={this.closeModal('updateServerModal')} className='update-server-modal-container'>
              <div onClick={this.stopEvent} className='update-server-modal-inner-container'>
                <h1>CHANGE SERVER NAME</h1>
                <form onSubmit={this.handleUpdate}>
                  <label htmlFor='server-name'>SERVER NAME</label>
                  <input value={this.state.updateName} onChange={this.handleUpdateChange} id='server-name' type='text' placeholder={this.props.server.name}/>
                  <div onClick={this.clearInput} className='clear-button'>Reset Nickname</div>
                  <div className='update-server-buttons'>
                    <div className='cancel-button' onClick={this.closeModal('updateServerModal')}>Cancel</div>
                    <button className='blue-button'>Save</button>
                  </div>
                </form>
              </div>
            </div>

          </Modal>

          <Modal className={{base:'serverDeleteModal',
            afterOpen: '',
            beforeClose: ''}} style={{overlay:{ backgroundColor: 'rgba(0,0,0,.8)'} } } ariaHideApp={false} isOpen={this.props.deleteServerModalOpen}>
            <div onClick={this.closeModal('deleteServerModal')} className='delete-server-modal-container'>
              <div onClick={this.stopEvent} className='delete-server-modal-inner-container'>
                <h1>DELETE {`'${this.props.server.name}'`}.</h1>
                <p>Are you sure you want to delete {this.props.server.name}? </p>
                <p>This action cannot be undone.</p>

                <div className='delete-server-buttons'>
                  <div className='cancel-button' onClick={this.closeModal('deleteServerModal')}>Cancel</div>
                  <button className='red-button' onClick={()=> this.handleDelete(this.props.server.id)}>
                    <p>Delete Server</p>
                  </button>
                </div>
              </div>
            </div>

          </Modal>

        </div>
      );
    }
  }
}

export default withRouter(ServerShow);
