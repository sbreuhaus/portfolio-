import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

// routing
import Main from '../stateless/Main';
import Home from '../Containers/Home';
import Form from '../Containers/Form';

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home}/>
      <Route path='form' component={Form}/>
    </Route>
  </Router>
);

export default routes;
