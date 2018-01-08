import React from 'react';
import { NavLink } from 'react-router-dom';

const ServerIndexItem = ({server}) => {
  return (
    <NavLink activeClassName='active-server' className='server-item' to={`/servers/${server.id}/textChannel/${server.text_channels[0]}`}>
      <p>{server.name[0].toUpperCase()}</p>
    </NavLink>
  );
};

export default ServerIndexItem;
