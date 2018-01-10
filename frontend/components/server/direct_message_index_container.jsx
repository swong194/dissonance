import { connect } from 'react-redux';
import DirectMessageIndex from './direct_message_index';
import { fetchDirectMessages } from '../../actions/direct_message_actions';
import { withRouter } from 'react-router-dom';
import { fetchTextChannel } from '../../actions/text_channel_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    directMessages: Object.values(state.entities.directMessages),
    users: state.entities.users
  };
};

const mapDispatchToProps = dispatch => {
  return{
    fetchDirectMessages: () => dispatch(fetchDirectMessages()),
    fetchTextChannel: id => dispatch(fetchTextChannel(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DirectMessageIndex));
