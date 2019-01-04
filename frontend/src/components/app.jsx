import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Redirect, Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Profile from './profile/profile';
import FupsAnonymousContainer from './fups/fups_anonymous_container';

const App = () => (
  <div id="app">
    <NavBarContainer />
    <Switch>
      <Redirect from='/' exact to='/signup' />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <ProtectedRoute exact path='/profile' component={Profile} />
      <ProtectedRoute exact path='/fups' component={FupsAnonymousContainer} />
    </Switch>
  </div>
);

export default App;