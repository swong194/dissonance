import React from 'react';

class TextChannelForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {body: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createMessage(this.state);
  }

  handleChange(type){
    return e => {
      e.preventDefault();
      this.setState({[type]: e.target.value});
    };
  }

  render(){
    return(
      <div className='textchannel-form-container'>
        <div className='textchannel-break'></div>
        <div className='textchannel-form-inner-container'>
          <form onSubmit={this.handleSubmit}>
            <input type='textarea' onChange={this.handleChange('body')}
              value={this.state.body} placeholder={`Message # ${this.props.channel.name}`} />
            <button className='hidden-message-button'>Button-kun</button>
          </form>
        </div>
      </div>
    );
  }
}

export default TextChannelForm;
