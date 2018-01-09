import { connect } from 'react-redux';
import TextChannel from './text_channel';
import { fetchMessages } from '../../actions/message_actions';

const mapStateToProps = (state, ownProps)=> {
  let messages = [];

  if(Object.values(state.entities.messages).length){
    messages = Object.values(state.entities.messages).filter(message => (message.channelId == ownProps.match.params.textChannelId));
  }

  return {
    messages,
    channelId: ownProps.match.params.textChannelId,
    users: state.entities.users
  };
};

const mapDispatchToProps = dispatch => {
  return{
    fetchMessages: id => dispatch(fetchMessages(id))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(TextChannel);
