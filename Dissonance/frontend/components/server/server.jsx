import React from 'react';
import { withRouter } from 'react-router-dom';

class Server extends React.Component {
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
    return (
      <div>
        Hello {this.props.currentUser.username}, we are under construction
        <button onClick={this.handleLogout}>Log Out</button>
      </div>
    );
  }
}

export default withRouter(Server);
