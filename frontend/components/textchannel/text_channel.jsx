import React from 'react';
import TextChannelFormContainer from './text_channel_form_container';

class TextChannel extends React.Component {
  componentWillReceiveProps(newProps){
    if(newProps.channelId !== this.props.channelId){
      this.props.fetchMessages(newProps.channelId);
    }
  }

  componentDidMount(){
    this.props.fetchMessages(this.props.channelId);
  }

  render(){
    let messages;
    if(this.props.messages.length){
      messages = this.props.messages.map((message, i) => (
        <div className='message-container'>
          <div className='message-inner-container'>
            <div className='message-header'>
              <p>{this.props.users[message.author_id].username}</p>
              <div className='message-creation'>{message.created_at}</div>
            </div>
            <div className='message-body'>
              <p>{message.body}</p>
            </div>
          </div>
        </div>
      ));
    }

    return(
      <div className='textchannel-container'>
        <div className='text-channel-messages-container'>
          {messages}
        </div>
        <TextChannelFormContainer />
      </div>
    );
  }
}

export default TextChannel;
