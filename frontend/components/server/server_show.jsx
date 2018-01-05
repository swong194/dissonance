import React from 'react';
import Modal from 'react-modal';

class ServerShow extends React.Component {
  constructor(props){
    super(props);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete.bind(this);
    this.state = {toggle: false, toggleClass:'no-server-show-options', toggleIcon:'fa fa-chevron-down'};
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleUpdate(){

  }

  handleDelete(){

  }

  handleToggle(){
    const className = this.state.toggleClass === 'server-show-options' ? 'no-server-show-options' : 'server-show-options';
    const toggleName = this.state.toggleIcon === 'fa fa-chevron-down' ? 'fa fa-times': 'fa fa-chevron-down';
    this.setState({toggle: !this.state.toggle, toggleClass: className, toggleIcon: toggleName});
  }

  render(){

    return (
      <div className='server-show-container'>
        <div className='server-show-inner-container'>
          <h1>{this.props.server.name}</h1>
          <button onClick={this.handleToggle}><p>
          <i className={this.state.toggleIcon} aria-hidden="true">
          </i></p></button>
          <div className={this.state.toggleClass}>
            <button onClick={this.handleUpdate} className='grey'><i class="fa fa-pencil" aria-hidden="true"></i> <p>Update Server</p></button>
            <button onClick={this.handleDelete } className='red'><i class="fa fa-trash-o" aria-hidden="true"></i> <p>Delete Server</p></button>
          </div>
        </div>


        <Modal></Modal>
        <Modal></Modal>
      </div>
    );
  }
}

export default ServerShow;
