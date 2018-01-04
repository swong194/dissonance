import React from 'react';
import { Route, withRouter, NavLink} from 'react-router-dom';
import ServerIndexItem from './server_index_item';
import Modal from 'react-modal';
import ServerShow from './server_show';

class ServerIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {update:'', createServerName: '', joinServerName: ''};
    this.handleLogout = this.handleLogout.bind(this);
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

  handleLogout(e){
    e.preventDefault();
    this.props.logoutUser().then(() => {
      this.props.history.push('/');
    });
  }

  render(){
    // <Route exact path='/servers/@me' component={FriendsContainer} />
    // <Route path='/servers/@me/textChannelId' component={DirectMessageContainer} />
    // <Route path='/servers/serverId/textChannels/textChannelId' component={ChannelContainer}/>
    const servers = this.props.servers.map(server => (
      <ServerIndexItem key={server.id} server={server} activeServer={this.props.activeServer}/>
    ));
    return (
      <main id='main-container'>

        <div className='nav'>
          <div className='server-list'>
            <div className='server-item'>
              <NavLink activeClassName='active-server' to='/servers/@me'>
                <p>Me</p>
              </NavLink>
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
          <button onClick={this.handleLogout}>Log Out</button>
        </div>
        <Route path='/servers/:serverId' component={ServerShow} />

        <Modal style={{overlay:{ backgroundColor: 'rgba(0,0,0,.8)'} } } ariaHideApp={false} className={ { base:'serverFormModal' } } isOpen={this.props.serverFormModalOpen}>

          <button onClick={this.closeModal}>X</button>

          <main className='serverFormModal-container'>
            <h1>OH, ANOTHER SERVER HUH?</h1>

            <div className='serverForm-container'>
              <form className='createForm' onSubmit={()=>this.handleServerFormSubmit('create')}>
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
