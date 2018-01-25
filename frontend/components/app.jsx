import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
  withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';

import SessionFormContainer from './session/session_form_container';
import GreetingContainer from './greeting/greeting_container';
import ServerIndexContainer from './server/server_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { removeModal } from '../actions/ui_actions';

const mapDispatchToProps = dispatch => {
  return {
    removeModal: modalType => dispatch(removeModal(modalType))
  };
};

class App extends React.Component{
  constructor(props){
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(){
    this.props.removeModal('updateAndDeleteModal');
  }

  render(){
    return (
      <div onClick={this.closeModal}>
        <Switch>
          <AuthRoute path='/login' component={SessionFormContainer} />
          <AuthRoute path='/signup' component={SessionFormContainer} />
          <ProtectedRoute path='/servers' component={ServerIndexContainer} />
          <Route exact path='/' component={GreetingContainer}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
