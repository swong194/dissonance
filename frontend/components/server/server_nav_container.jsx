import { connect } from 'react-redux';
import ServerNav from './server_nav';

const mapStateToProps = (state, ownProps) => {
  let channel = {};
  if(state.entities.textChannels[ownProps.match.params.textChannelId]){
    channel = state.entities.textChannels[ownProps.match.params.textChannelId];
  }
  return{
    channel
  };
};
export default connect(mapStateToProps, null)(ServerNav);
