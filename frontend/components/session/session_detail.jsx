import React from 'react';
import {withRouter} from 'react-router-dom';

class SessionDetail extends React.Component{
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e){
    e.preventDefault();
    this.props.logoutUser().then(()=>(
      this.props.history.push('/')
    ));
  }

  render(){
    return (
      <div className='session-detail'>
        {this.props.user.username}
        <button onClick={this.handleLogout}>Log Out</button>
      </div>
    );
  }
}

export default withRouter(SessionDetail);
