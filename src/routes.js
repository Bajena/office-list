import React from 'react';
import { IndexRoute, Route } from 'react-router';

// import { HelloContainer } from './components/hello/hello';
import Dashboard from './components/dashboard/dashboard';

export default () => (
  <Route path="/">
    <IndexRoute component={Dashboard}/>
    <Route path="dashboard" component={Dashboard} />
  </Route>
);

