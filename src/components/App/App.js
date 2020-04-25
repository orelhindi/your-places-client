import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import Users from '../../containers/Users';
import NewPlace from '../../containers/NewPlace';

export default () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Users} />
        <Route path='/places/new' exact component={NewPlace} />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

