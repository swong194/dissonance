import React from 'react';
import TextChannelFormContainer from './text_channel_form_container';

class TextChannel extends React.Component {
  render(){
    return(
      <div className='textchannel-container'>
        Hello from textchannel
        <TextChannelFormContainer />
      </div>
    );
  }
}

export default TextChannel;
