import React from 'react';
import Modal from 'react-modal';
import { NavLink } from 'react-router-dom';

class FriendLink extends React.Component{
  render(){
    return(
      <div className='friend-button'>
        <NavLink to='/servers/@me'>Friends</NavLink>
      </div>
    );
  }
}

export default FriendLink;
