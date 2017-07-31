import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Containers
import Home from '../containers/Home';
import Board from './Board';

const Main = () => (
  <div className="Main">
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/boards/:id' component={Board} />
    </Switch>
  </div>
)

export default Main;