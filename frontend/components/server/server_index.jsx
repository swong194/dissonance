import React from 'react';
import { Route, withRouter, NavLink} from 'react-router-dom';
import ServerIndexItem from './server_index_item';
import Modal from 'react-modal';
import ServerShow from './server_show';

class ServerIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {update:'', serverModalOpen: false};
    this.handleLogout = this.handleLogout.bind(this);
    this.handleServerForm = this.handleServerForm.bind(this);
  }

  handleServerForm(){
    
  }

  componentDidMount(){
    this.props.fetchServers();
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
          <div className='server-item'>
            <NavLink activeClassName='active-server' to='/servers/@me'>
              <p>Me</p>
            </NavLink></div>
        <div className='server-line'></div>
          <div className='server-list'>
            {servers}
            <div className='server-form-button' onClick={this.handleServerForm}>
              <p>+</p>
            </div>
            <div className='end-list-line'></div>
          </div>
        </div>
        <div className='secondary-container'>
          <button onClick={this.handleLogout}>Log Out</button>
        </div>
        <Route path='/servers/:serverId' component={ServerShow} />
        {/* <Modal isOpen={this.props.serverModalOpen}>
        </Modal> */}
      </main>
    );
  }
}

export default withRouter(ServerIndex);
