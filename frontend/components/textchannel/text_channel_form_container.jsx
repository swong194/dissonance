import { createMessage } from '../../actions/message_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TextChannelForm from './text_channel_form';

const mapStateToProps = (state, ownProps) => {
  let channel = {};
  if(state.entities.textChannels[ownProps.match.params.textChannelId]){
    channel = state.entities.textChannels[ownProps.match.params.textChannelId];
  }
  return{
    channel
  };
};


const mapDispatchToProps = dispatch => {
  return{
    createMessage: message => dispatch(createMessage(message))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TextChannelForm));
