import React from 'react';
import { Route, withRouter, Link} from 'react-router-dom';
// import ServerIndexItems from './server_index_items';

class ServerIndex extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
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
    return (
      <main>
        Hello {this.props.currentUser.username}, we are under construction
        <div >
        </div>
        <button onClick={this.handleLogout}>Log Out</button>
      </main>
    );
  }
}

export default withRouter(ServerIndex);
