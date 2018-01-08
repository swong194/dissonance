import React from 'react';

class ServerNav extends React.Component{
  render(){
    return(
      <div className='nav-bar'>
        <i className="fa fa-hashtag" aria-hidden="true"></i>
        <p>{this.props.channel.name}</p>
      </div>
    );
  }
}

export default ServerNav;
