import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

class TextChannelList extends React.Component{
  constructor(props){
    super(props);
    this.state = { activeChannel: this.props.activeChannel };
    this.handleActive = this.handleActive.bind(this);
  }

  componentWillReceiveProps(newProps){
    if(newProps.serverId !== this.props.serverId){
      this.props.fetchTextChannels(newProps.serverId);
    }
  }

  handleActive(textChannelId){
    this.setState({activeChannel: textChannelId});
  }

  componentDidMount(){
    this.props.fetchTextChannels(this.props.serverId);
  }

  render(){
    let textChannels;
    if(this.props.textChannels.length){
      textChannels = this.props.textChannels.map(textchannel => {
        if(this.state.activeChannel === textchannel.id){
          return(
            <div key={textchannel.id} className='text-channel-item active-text-channel'>
              <NavLink onClick={this.handleActive(textchannel.id)} to={`/servers/${this.props.serverId}/textChannel/${textchannel.id}`}>
                <i className="fa fa-hashtag" aria-hidden="true"></i>
                <span>{textchannel.name}</span>
              </NavLink>
              <i className="fa fa-cog channel-settings" aria-hidden="true"></i>
            </div>
          );
        } else {
          return(
            <div key={textchannel.id} className='text-channel-item'>
              <NavLink onClick={() => this.handleActive(textchannel.id)} to={`/servers/${this.props.serverId}/textChannel/${textchannel.id}`}>
                <i className="fa fa-hashtag" aria-hidden="true"></i>
                <span>{textchannel.name}</span>
              </NavLink>
              <i className="fa fa-cog channel-settings" aria-hidden="true"></i>
            </div>
          );
        }
      });
    }

    return (
      <div className='text-channel-list-container'>
        {textChannels}
      </div>
    );
  }
}

export default withRouter(TextChannelList);
