import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import Board from '../containers/Board';

const Main = () => (
  <div className="Main">
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/boards' component={Home} />
      <Route path='/boards/:id' component={Board} />
    </Switch>
  </div>
)

export default Main;