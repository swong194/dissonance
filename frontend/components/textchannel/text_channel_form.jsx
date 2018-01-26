import React from 'react';

class TextChannelForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {body: '', text_channel_id: this.props.channel.id, currentUserId: this.props.currentUser.id};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(newProps){
    if(newProps.channel.id !== this.props.channel.id){
      this.setState({text_channel_id: newProps.channel.id});
    }
  }

  componentDidMount(){
    this.props.fetchTextChannel(this.props.channelId);
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.state.body.length === 0){
      return;
    }
    this.chats.create(this.state);
    this.setState({body: '', text_channel_id: this.props.channel.id});
  }

  handleChange(type){
    return e => {
      e.preventDefault();
      this.setState({[type]: e.target.value});
    };
  }
  
  componentWillMount(){
    this.createSocket();
  }

  createSocket() {
    let cable = ActionCable.createConsumer();
    this.chats = cable.subscriptions.create({
      channel: 'ChatChannel'
    }, {
      connected: () => {},
      received: (message) => {
        this.props.receiveMessage(message);
      },
      create: function(chatContent) {
        this.perform('create', {
          content: chatContent
        });
      }
    });
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
