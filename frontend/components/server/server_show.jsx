import React from 'react';
import Modal from 'react-modal';
import { withRouter } from 'react-router-dom';

class ServerShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {toggle: false, toggleClass:'no-server-show-options', toggleIcon:'fa fa-chevron-down', updateName: '', newChannelName: ''};
    this.handleUpdateModal = this.handleUpdateModal.bind(this);
    this.handleDeleteModal = this.handleDeleteModal.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdateChange = this.handleUpdateChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.handleCreateChannelModal = this.handleCreateChannelModal.bind(this);
    this.handleNewChannelName = this.handleNewChannelName.bind(this);
    this.createChannel = this.createChannel.bind(this);
  }

  componentWillReceiveProps(newProps){
    this.resetState();
  }

  resetState(){
    this.setState({toggle: false, toggleClass:'no-server-show-options', toggleIcon:'fa fa-chevron-down', updateName: '', newChannelName: ''});
  }

  handleUpdateChange(e){
    this.setState({updateName: e.target.value});
  }

  handleUpdateModal(){
    this.props.updateServerModal('updateServerModal');
    this.resetState();
  }

  handleDeleteModal(){
    this.props.deleteServerModal('deleteServerModal');
    this.resetState();
  }

  handleDelete(id){
    this.props.deleteServer(id);
  }

  closeModal(){
    this.props.closeModal();
    this.resetState();
  }

  handleCreateChannelModal(){
    this.props.updateServerModal('openTextchannelModal');
    this.resetState();
  }

  handleUpdate(){
    this.props.updateServer(this.state.updateName, this.props.server.id);
  }

  clearInput(){
    this.setState({updateName: ''});
  }

  handleToggle(){
    const className = this.state.toggleClass === 'server-show-options' ? 'no-server-show-options' : 'server-show-options';
    const toggleName = this.state.toggleIcon === 'fa fa-chevron-down' ? 'fa fa-times': 'fa fa-chevron-down';
    this.setState({toggle: !this.state.toggle, toggleClass: className, toggleIcon: toggleName});
  }

  handleNewChannelName(e){
    e.preventDefault();
    this.setState({newChannelName: e.target.value});
  }

  createChannel(e){
    e.preventDefault();
    this.props.createTextChannel({name: this.state.newChannelName, server_id: this.props.server.id})
    .then(channel => this.props.history.push(`/servers/${channel.server_id}/textChannel/${channel.id}`)
    );
  }

  render(){
    return (
      <div className='server-show-container'>
        <div className='server-show-inner-container'>
          <h1>{this.props.server.name}</h1>
          <button onClick={this.handleCreateChannelModal}>
            <i className="fa fa-plus" aria-hidden="true"></i>
          </button>
            <button onClick={this.handleToggle}><p>
              <i className={this.state.toggleIcon} aria-hidden="true">
              </i></p>
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
          <div className='create-channel-container'>
            <div className='create-channel-inner-container'>
              <button onClick={this.closeModal}>X</button>
              <form onSubmit={this.createChannel}>
                <input onChange={this.handleNewChannelName} value={this.state.newChannelName} placeholder='#general'/>
                <button>Create Channel</button>
              </form>
            </div>
          </div>
        </Modal>

        <Modal className={{base:'serverUpdateModal',
          afterOpen: '',
          beforeClose: ''}}
          style={{overlay:{ backgroundColor: 'rgba(0,0,0,.8)'} } } ariaHideApp={false} isOpen={this.props.updateServerModalOpen}>

          <div className='update-server-modal-container'>
            <div className='update-server-modal-inner-container'>
              <h1>CHANGE SERVER NAME</h1>
              <form onSubmit={() => this.handleUpdate()}>
                <label htmlFor='server-name'>SERVER NAME</label>
                  <input value={this.state.updateName} onChange={this.handleUpdateChange} id='server-name' type='text' placeholder={this.props.server.name}/>
                  <div onClick={this.clearInput} className='clear-button'>Reset Nickname</div>
                  <div className='update-server-buttons'>
                  <button className='cancel-button' onClick={() => this.closeModal()}>Cancel</button>
                  <button className='blue-button'>Save</button>
                </div>
              </form>
            </div>
          </div>

        </Modal>

        <Modal className={{base:'serverDeleteModal',
          afterOpen: '',
          beforeClose: ''}} style={{overlay:{ backgroundColor: 'rgba(0,0,0,.8)'} } } ariaHideApp={false} isOpen={this.props.deleteServerModalOpen}>
          <div className='delete-server-modal-container'>
            <div className='delete-server-modal-inner-container'>
              <h1>DELETE {`'${this.props.server.name}'`}.</h1>
              <p>Are you sure you want to delete {this.props.server.name}? This action cannot be undone.</p>

              <div className='delete-server-buttons'>
                <button className='cancel-button' onClick={()=> this.closeModal()}>Cancel</button>
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

export default withRouter(ServerShow);
