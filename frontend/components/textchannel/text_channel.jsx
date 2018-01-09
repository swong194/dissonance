import React from 'react';
import TextChannelFormContainer from './text_channel_form_container';
import MessageItemContainer from '../message/message_item_container';

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
      messages = this.props.messages.reverse().map((message, i) => (
        <MessageItemContainer key={i} message={message} users={this.props.users} usersIds={Object.keys(this.props.users)}/>
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
