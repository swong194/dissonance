import React from 'react';
import { Route, withRouter, NavLink} from 'react-router-dom';
import ServerIndexItem from './server_index_item';
import Modal from 'react-modal';
import ServerShowContainer from './server_show_container';
import SessionDetailContainer from '../session/session_detail_container';
import ServerUsersIndexContainer from './server_users_index_container';
import TextChannelContainer from '../textchannel/text_channel_container';
import TextChannelList from '../textchannel/text_channel_list';


class ServerIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {update:'', createServerName: '', joinServerName: ''};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleServerFormSubmit = this.handleServerFormSubmit.bind(this);
  }

  openModal(){
    this.props.dispatchModal('serverFormModalOpen');
  }

  closeModal(){
    this.props.dispatchModal(null);
  }

  componentDidMount(){
    this.props.fetchServers();
  }

  handleServerFormSubmit(type){
    if(type === 'join'){
      this.props.joinServer(this.state.joinServerName);
    } else {
      this.props.createServer(this.state.createServerName);
    }
  }

  handleChange(type){
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  render(){
    const servers = this.props.servers.map(server => (
      <ServerIndexItem key={server.id} server={server} activeServer={this.props.activeServer}/>
    ));

    const errorClass = this.props.errors.length ? 'main-server-errors' : 'non-active-error';

    if(this.props.errors.length){

    }
    const errors = this.props.errors.map(error => (
      <span>{error}</span>
    ));

    return (
      <main id='main-container'>
        <div className={errorClass}>
          {errors}
        </div>
        <div className='nav'>
          <div className='server-list'>
            <div className='server-item'>
              <NavLink className='me' activeClassName='active-server' to='/servers/@me'></NavLink>
            </div>
            <div className='server-line'></div>
            {servers}
            <button className='server-form-button' onClick={this.openModal}>
              <p>+</p>
            </button>
            <div className='end-list-line'></div>
          </div>
        </div>

        <div className='secondary-container'>
          <div className='secondary-nav'>
            <Route path='/servers/:serverId' component={ServerShowContainer} />
            <div className='text-channel-list'>
              <Route path='/servers/:serverId/textChannel/:textChannelId' component={TextChannelList} />
            </div>
            <Route path ='/servers' component={SessionDetailContainer}/>
          </div>
        </div>

        <div className='third-container'>
          <div className='third-nav'>
            I am the nav
          </div>
          <div className='channel-components'>
            <Route path='/servers/:serverId/textChannel/:textChannelId'
              component={TextChannelContainer}/>
            <Route path='/servers/:serverId' component={ServerUsersIndexContainer}/>
          </div>
        </div>

        <Modal style={{overlay:{ backgroundColor: 'rgba(0,0,0,.8)'} } } ariaHideApp={false} className={ { base:'serverFormModal' } } isOpen={this.props.serverFormModalOpen}>

          <button onClick={this.closeModal}>X</button>

          <main className='serverFormModal-container'>
            <h1>OH, ANOTHER SERVER HUH?</h1>

            <div className='serverForm-container'>
              <form className='createForm' onSubmit={()=>this.handleServerFormSubmit('create')}>
                <h1>Create</h1>
                <p>{`Create a new server and invite your friends. It's free`}</p>
                <label htmlFor='createServer'>SERVER NAME</label>
                <input placeholder='Enter Server Name' id='createServer' onChange={this.handleChange('createServerName')}
                  value={this.props.createServerName}></input>
                <button className='serverFormModal-button blue'>
                  Create Server
                </button>
              </form>

              <div className='serverFormModal-or'><p>or</p></div>

              <form className='joinForm' onSubmit={()=>this.handleServerFormSubmit('join')}>
                <h1>Join</h1>
                <p>Enter the Server you want to join.</p>
                <label htmlFor='joinServer'>SERVER NAME</label>
                <input placeholder='Enter Server Name' id='joinServer' onChange={this.handleChange('joinServerName')}
                  value={this.props.joinServerName}></input>
                <button className='serverFormModal-button green'>
                Join Server
              </button>
              </form>
            </div>
          </main>
        </Modal>

      </main>
    );
  }
}

export default withRouter(ServerIndex);
