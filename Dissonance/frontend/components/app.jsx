import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import SessionFormContainer from './session/session_form_container';
import GreetingContainer from './greeting/greeting_container';
import ServerIndexContainer from './server/server_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      <Switch>
        <AuthRoute path='/login' component={SessionFormContainer} />
        <AuthRoute path='/signup' component={SessionFormContainer} />
        <ProtectedRoute path='/servers' component={ServerIndexContainer} />
        <AuthRoute exact path='/' component={GreetingContainer}/>
      </Switch>
    </div>
  );
};

export default App;
