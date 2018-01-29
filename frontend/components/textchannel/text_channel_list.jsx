import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import Modal from 'react-modal';

class TextChannelList extends React.Component{
  constructor(props){
    super(props);
    this.openChannelModal = this.openChannelModal.bind(this);
    this.closeChannelModal = this.closeChannelModal.bind(this);
    this.openDeleteChannelModal = this.openDeleteChannelModal.bind(this);
    this.closeDeleteChannelModal = this.closeDeleteChannelModal.bind(this);
    this.state = { modalId : null, modalName: null };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillReceiveProps(newProps){
    if(newProps.serverId !== this.props.serverId){
      this.props.fetchTextChannels(newProps.serverId);
    }
  }

  componentWillMount(){
    this.createSocket();
  }

  componentDidMount(){
    this.props.fetchTextChannels(this.props.serverId);
  }

  openChannelModal(id, name){
    this.setState({modalId: id, modalName: name});
    this.props.receiveModal('openChannelModal');
  }

  openDeleteChannelModal(){
    this.props.receiveModal('deleteChannelModalOpen');
  }

  closeDeleteChannelModal(){
    this.props.removeModal('deleteChannelModalOpen');
  }

  closeChannelModal(){
    this.props.removeModal('openChannelModal');
  }

  handleChange(type){
    return e => {
      e.preventDefault();
      this.setState({[type]: e.target.value});
    };
  }

  handleUpdate(e){
    e.preventDefault();
    this.props.removeErrors();
    this.textchannel.update({name: this.state.modalName, id: this.state.modalId});
  }

  handleDelete(e){
    e.preventDefault();
    this.closeDeleteChannelModal();
    this.props.removeErrors();
    this.textchannel.delete(this.state.modalId);
  }

  stopEvent(e){
    e.stopPropagation();
  }

  createSocket() {
    let cable = ActionCable.createConsumer();
    this.textchannel = cable.subscriptions.create({
      channel: 'TextChannelChannel'
    }, {
      connected: () => {},
      received: (channel) => {
        if(typeof channel.name === 'string'){
          if(channel.server_id == this.props.serverId){
            this.props.receiveTextChannel(channel);
            if(this.props.activeChannel === '0'){
              this.props.history.push(`/servers/${this.props.serverId}/textChannel/${channel.id}`);
            }
          }
        } else if(channel.id){
          this.props.removeTextChannel(channel.id);
          if(this.props.match.params.textChannelId == channel.id){
            let tId = '0';
            for (let i = 0; i < this.props.textChannelIds.length; i++) {
              if(this.props.textChannelIds[i] !== channel.id.toString()){
                tId = this.props.textChannelIds[i];
                break;
              }
            }
            this.props.history.push(`/servers/${this.props.serverId}/textChannel/${tId}`);
          }
        } else {
          this.props.receiveErrors(channel.errors);
        }
      },
      delete: function(id){
        this.perform('delete', {
          id: id
        });
      },
      update: function(textChannel) {
        this.perform('update', {
          text_channel: textChannel
        });
      }
    });
  }

  render(){
    let textChannels;
    if(this.props.textChannels.length){
      textChannels = this.props.textChannels.map((textchannel) => (
        <div key={textchannel.id} className={
          this.props.match.params.textChannelId == textchannel.id ?
           'text-channel-item active-text-channel' : 'text-channel-item' }>
          <NavLink to={
            `/servers/${this.props.serverId}/textChannel/${textchannel.id}`}>
            <i className="fa fa-hashtag" aria-hidden="true"></i>
            <span>{textchannel.name}</span>
          </NavLink>
          <i onClick={() => this.openChannelModal(textchannel.id, textchannel.name)}
            className="fa fa-cog channel-settings" aria-hidden="true">
            <div className='server-item-name'><p>Channel Options</p></div>
            <div className='triangle'></div>
          </i>
        </div>
      ));
    }

    return (
      <div className='text-channel-list-container'>
        {textChannels}

        <Modal style={{overlay:{ backgroundColor: 'rgba(0,0,0,.8)'} } }
          ariaHideApp={false} className={ { base:'channel-form-modal',
            afterOpen: 'myClass_after-open',
            beforeClose: 'myClass_before-close' } }
          isOpen={this.props.openChannelModal}>
          <div className='text-channel-form-container'>
            <div className='text-channel-form-inner-container'>

              <div className='text-channel-form-side-bar-container'>
                <div className='text-channel-form-side-bar-inner-container'>

                  <div className='text-channel-form-side-bar-details'>
                    <i className="fa fa-hashtag" aria-hidden="true"></i>
                    <p>{this.state.modalName} <span>TEXT CHANNELS</span></p>
                  </div>
                  <div className='text-channel-form-side-bar-options'>
                    <div className='selected'><p>Overview</p></div>
                    <div onClick={this.openDeleteChannelModal} className='delete-text-channel'>Delete</div>
                  </div>

                </div>
              </div>

              <div className='text-channel-form-main-container'>
                <div className='text-channel-form-main-inner-container'>
                  <h1>OVERVIEW</h1>
                  <form onSubmit={this.handleUpdate}>
                    <label htmlFor='channel-name'>CHANNEL NAME</label>
                    <input id='channel-name' onChange={this.handleChange('modalName')} value={this.state.modalName}/>
                    <button className='text-channel-edit-button'></button>
                  </form>
                </div>
                <div className='text-channel-form-exit'>
                  <button onClick={this.closeChannelModal}><p>X</p></button>
                  <p>ESC</p>
                </div>
              </div>

            </div>

          </div>
        </Modal>

        <Modal className={{base:'serverDeleteModal',
          afterOpen: '',
          beforeClose: ''}} style={{overlay:{ backgroundColor: 'rgba(0,0,0,.8)'} } } ariaHideApp={false} isOpen={this.props.deleteChannelModalOpen}>
          <div onClick={this.closeDeleteChannelModal} className='delete-server-modal-container'>
            <div onClick={this.stopEvent} className='delete-server-modal-inner-container'>
              <h1>DELETE {`'${this.state.modalName}'`}.</h1>
              <p>Are you sure you want to delete {this.state.modalName}? </p>
              <p>This action cannot be undone.</p>

              <div className='delete-server-buttons'>
                <div className='cancel-button' onClick={this.closeDeleteChannelModal}>Cancel</div>
                <button className='red-button' onClick={this.handleDelete}>
                  <p>Delete Text Channel</p>
                </button>
              </div>
            </div>
          </div>

        </Modal>

      </div>
    );
  }
}

export default withRouter(TextChannelList);
