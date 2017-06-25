import React from 'react';
import { IndexRoute, Route } from 'react-router';

import { requireAuth, requireGuest } from './helpers/auth';

// import { HelloContainer } from './components/hello/hello';
import Dashboard from './components/dashboard/dashboard';
import { LoginContainer } from './components/login/login';
import { LogoutContainer } from './components/logout/logout';
import { NotFound } from './components/not-found/not-found';

export default () => (
  <Route path="/">
    <IndexRoute component={Dashboard}/>
    <Route path="dashboard" component={Dashboard} />
    <Route path="login" component={LoginContainer} onEnter={requireGuest}/>
    <Route path="logout" component={LogoutContainer} onEnter={requireAuth}/>
    <Route path="*" component={NotFound}/>
  </Route>
);

