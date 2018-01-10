import { connect } from 'react-redux';
import DirectMessageIndex from './direct_message_index';
import { fetchDirectMessages } from '../../actions/direct_message_actions';

const mapStateToProps = state => {
  return {
    directMessages: state.entities.directMessages
  };
};

const mapDispatchToProps = dispatch => {
  return{
    fetchDirectMessages: () => dispatch(fetchDirectMessages())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DirectMessageIndex);
