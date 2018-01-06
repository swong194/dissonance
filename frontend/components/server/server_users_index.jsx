import React from 'react';

class ServerUsersIndex extends React.Component{
  componentDidMount(){
    this.props.fetchServerUsers(this.props.serverId);
  }

  componentWillReceiveProps(newProps){
    if(newProps.serverId !== this.props.serverId){
      this.props.fetchServerUsers(newProps.serverId);
    }
  }

  render(){
    const users = this.props.users.map((user, i) => (
      <div key={i} className='server-user-item'><p>{user.username}</p></div>
    ));
    return(
      <div className='server-user-index-container'>
        <div className='server-user-index-inner-container'>
        <div className='server-user-heading'>USERS-{this.props.users.length}</div>
        {users}
        </div>
      </div>
    );
  }
}

export default ServerUsersIndex;
