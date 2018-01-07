import React from 'react';

class TextChannelList extends React.Component{
  componentDidMount(){
    this.props.fetchTextChannels(this.props.serverId);
  }

  render(){
    let textChannels;

    if(this.props.textChannels.length){
      textChannels = this.props.textChannels.map(textchannel => (
        <div key={textchannel.id} className='textChannel-item'>
          <p>{textchannel.name}</p>
        </div>
      ));
    }

    return (
      <div className='textchannel-list-container'>
        {textChannels}
      </div>
    );
  }
}

export default TextChannelList;
