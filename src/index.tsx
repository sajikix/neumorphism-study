import React from 'react';
import { render } from 'react-dom';
import { Profile, Atoms, Molecules, Test } from './pages';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="/atoms">
          <Atoms></Atoms>
        </Route>
        <Route path="/molecules">
          <Molecules></Molecules>
        </Route>
        <Route path="/Test">
          <Profile></Profile>
        </Route>
        <Route path="/">
          <Test></Test>
        </Route>
      </Switch>
    </Router>
  );
};

render(<Root />, document.getElementById('root'));
