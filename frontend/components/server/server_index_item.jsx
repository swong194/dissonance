import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class ServerIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.determineActive = this.determineActive.bind(this);
  }

  determineActive(match, location){
    if(location.pathname.slice(0, location.pathname.indexOf('/textChannel')) === `/servers/${this.props.server.id}`){
      return true;
    } else {
      return false;
    }
  }

  render(){
    let channel = this.props.server.text_channels.length ? this.props.server.text_channels[0] : '0';
    return (
      <div className='server-item'>
        <NavLink
          isActive={this.determineActive}
          activeClassName='active-server'
          to={`/servers/${this.props.server.id}/textChannel/${channel}`}>
          <p>{this.props.server.name[0].toUpperCase()}</p>
        </NavLink>
        <div className='server-item-name'>
          <p>{this.props.server.name.length > 15 ? this.props.server.name.slice(0,13) + '...' : this.props.server.name}</p>
        </div>
        <div className='triangle'></div>
      </div>
    );
  }
}

export default withRouter(ServerIndexItem);
