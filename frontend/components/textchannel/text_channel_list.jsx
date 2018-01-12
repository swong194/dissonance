import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import Modal from 'react-modal';

class TextChannelList extends React.Component{
  constructor(props){
    super(props);
    this.openChannelModal = this.openChannelModal.bind(this);
    this.closeChannelModal = this.closeChannelModal.bind(this);
    this.state = { modalId : null, modalName: null };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentWillReceiveProps(newProps){
    if(newProps.serverId !== this.props.serverId){
      this.props.fetchTextChannels(newProps.serverId);
    }
  }

  openChannelModal(id, name){
    this.setState({modalId: id, modalName: name});
    this.props.dispatchModal('openChannelModal');
  }

  closeChannelModal(){
    this.props.dispatchModal(null);
  }

  componentDidMount(){
    this.props.fetchTextChannels(this.props.serverId);
  }

  handleChange(type){
    return e => {
      e.preventDefault();
      this.setState({[type]: e.target.value});
    };
  }

  handleUpdate(e){
    e.preventDefault();
    this.props.updateTextChannel(this.state.modalName, this.state.modalId);
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
            className="fa fa-cog channel-settings" aria-hidden="true"></i>
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

      </div>
    );
  }
}

export default withRouter(TextChannelList);
