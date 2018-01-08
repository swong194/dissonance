import React from 'react';
import TextChannelFormContainer from './text_channel_form_container';

class TextChannel extends React.Component {
  componentDidMount(){
    this.props.fetchMessages(this.props.channelId);
  }

  render(){
    let messages;
    if(this.props.messages.length){
      messages = this.props.messages.map(message => (
        <div className='message-container'>
          <div className='message-inner-container'>
            <div className='message-creation'>{message.created_at}</div>
            <p>{this.props.users[message.author_id].username}</p>
          </div>
        </div>
      ));
    }

    return(
      <div className='textchannel-container'>
        {messages}
        <TextChannelFormContainer />
      </div>
    );
  }
}

export default TextChannel;
