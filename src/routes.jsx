import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Developers from './pages/Developers';
import StarApp from './pages/StarApp';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/developers" component={Developers} />
        <Route path="/app" component={StarApp} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;