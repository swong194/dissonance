import React from 'react';

class TextChannelForm extends React.Component{
  render(){
    return(
      <div className='textchannel-form-container'>
        <form>
          <input type='text' placeholder='Message'></input>
        </form>
      </div>
    );
  }
}

export default TextChannelForm;
