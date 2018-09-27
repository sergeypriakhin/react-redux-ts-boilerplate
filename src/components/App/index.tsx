import 'normalize.css';
import './App.css';

import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
// pages
import HomePage from '../../pages/Home';
import NotFoundPage from '../../pages/NotFoundPage';

export default class App extends React.PureComponent {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </main>
    );
  }
}
