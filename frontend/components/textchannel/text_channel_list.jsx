import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import Modal from 'react-modal';

class TextChannelList extends React.Component{
  constructor(props){
    super(props);
    this.openChannelModal = this.openChannelModal.bind(this);
    this.closeChannelModal = this.closeChannelModal.bind(this);
    this.state = { modalId : null };
  }

  componentWillReceiveProps(newProps){
    if(newProps.serverId !== this.props.serverId){
      this.props.fetchTextChannels(newProps.serverId);
    }
  }

  openChannelModal(id){
    this.setState({modalId: id});
    this.props.dispatchModal('openChannelModal');
  }

  closeChannelModal(){
    this.props.dispatchModal(null);
  }

  componentDidMount(){
    this.props.fetchTextChannels(this.props.serverId);
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
          <i onClick={() => this.openChannelModal(textchannel.id)}
            className="fa fa-cog channel-settings" aria-hidden="true"></i>
        </div>
      ));
    }

    return (
      <div className='text-channel-list-container'>
        {textChannels}
        
        <Modal style={{overlay:{ backgroundColor: 'rgba(0,0,0,.8)'} } }
          ariaHideApp={false} className={ { base:'serverFormModal' } }
          isOpen={this.props.openChannelModal}>
          Hi from Modal
          <button onClick={this.closeChannelModal}></button>
        </Modal>
      </div>
    );
  }
}

export default withRouter(TextChannelList);
