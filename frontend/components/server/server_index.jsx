import React from 'react';
import { Route, withRouter, Link} from 'react-router-dom';
// import ServerIndexItem from './server_index_item';

class ServerIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {update:''};
    this.handleLogout = this.handleLogout.bind(this);
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
    // <Link to='/servers/@me'>Friends</Link>
    // <ServerIndexItems />
    // <Route exact path='/servers/@me' component={FriendsContainer} />
    // <Route path='/servers/@me/textChannelId' component={DirectMessageContainer} />
    // <Route path='/servers/serverId/textChannels/textChannelId' component={ChannelContainer}/>
    const servers = this.props.servers.map(server => (
      <div className='server-item' key={server.id}>{server.name[0].toUpperCase()}</div>
    ));
    return (
      <main id='main-container'>

        <div className='nav'>
          <div>H</div>
        <div className='server-line'></div>
          <div className='server-list'>
            {servers}
          </div>
        </div>

        <div className='secondary-container'>
          <button onClick={this.handleLogout}>Log Out</button>
        </div>


      </main>
    );
  }
}

export default withRouter(ServerIndex);
