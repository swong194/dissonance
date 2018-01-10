import React from 'react';

class DirectMessageIndex extends React.Component{
  componentDidMount(){
    this.props.fetchDirectMessages();
  }
  
  render(){
    return (
      <div className='direct_message_index_container'>
        Hello from Direct Message Index
      </div>
    );
  }
}

export default DirectMessageIndex;
