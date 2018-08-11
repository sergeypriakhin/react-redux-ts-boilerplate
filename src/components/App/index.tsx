import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
// pages
import HomePage from '../../pages/Home';
import NotFoundPage from '../../pages/NotFoundPage';
// components
import Header from '../Header';
import 'normalize.css';
import './App.scss';

export default class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </main>
    );
  }
}
