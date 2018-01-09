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
    return (
      <NavLink
        isActive={this.determineActive}
        activeClassName='active-server'
        className='server-item'
        to={`/servers/${this.props.server.id}/textChannel/${this.props.server.text_channels[0]}`}>
        <p>{this.props.server.name[0].toUpperCase()}</p>
      </NavLink>
    );
  }
}

export default withRouter(ServerIndexItem);
