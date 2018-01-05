import { connect } from 'react-redux';
import ServerShow from './server_show';
import { updateServer, deletServer } from '../../actions/server_actions';

const mapStateToProps = (state, ownProps) => {
  const server = state.entities.servers[ownProps.match.params.serverId] || {name: ''};
  return{
    server
  };
};

const mapDispatchToProps = dispatch => {
  return{
    updateServer: (name) => dispatch(updateServer()),
    deleteServer: id => dispatch(deleteServer(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServerShow);
