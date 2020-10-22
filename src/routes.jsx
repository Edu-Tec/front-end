import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Map from './pages/Map';
import Members from './pages/Members';
import MembersTest from './pages/MembersTest';
import Astro from './pages/Astro';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/map" component={Map} />
        <Route exact path="/members" component={Members} />
        <Route exact path="/membersTest" component={MembersTest} />
        <Route exact path="/astro/:id" component={Astro} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
