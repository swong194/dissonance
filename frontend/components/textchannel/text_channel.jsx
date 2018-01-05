import React from 'react';
import TextChannelForm from './text_channel_form';

class TextChannel extends React.Component {
  render(){
    return(
      <div className='textchannel-container'>
        Hello from textchannel
        <TextChannelForm />
      </div>
    );
  }
}

export default TextChannel;
