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

class App extends React.Component{
  render(){
    return (
      <Switch>
        <AuthRoute path='/login' component={SessionFormContainer} />
        <AuthRoute path='/signup' component={SessionFormContainer} />
        <ProtectedRoute path='/servers' component={ServerIndexContainer} />
        <Route exact path='/' component={GreetingContainer}/>
      </Switch>
    );
  }
}

export default withRouter(connect(null, null)(App));
