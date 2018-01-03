import React from 'react';
import { NavLink } from 'react-router-dom';

const ServerIndexItem = ({server, activeServer}) => {
  // let className = 'server-item';
  // if(server.id === activeServer){
  //   className = 'server-item active-server';
  // }

  return (
    <NavLink activeClassName='active-server' className='server-item' to={`/servers/${server.id}`}>
      <p>{server.name[0].toUpperCase()}</p>
    </NavLink>
  );
};

export default ServerIndexItem;
