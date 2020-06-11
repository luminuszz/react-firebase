import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CreateUser from '../pages/Create';
import Dashboard from '../pages/Dasboard';
import SignIn from '../pages/SignIn';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route component={CreateUser} exact path="/CreateUser" />
      <Route component={SignIn} path="/signIn" />
      <Route component={Dashboard} path="/" />
    </Switch>
  </BrowserRouter>
);
export default Routes;
