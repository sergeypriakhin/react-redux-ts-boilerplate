import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Dashboard from '@module/DashboardPage';
import MainLayout from '@component/Layout';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <MainLayout>
      <CssBaseline />
      <Helmet defaultTitle="Typescript React Boilerplate">
        <meta
          name="description"
          content="A Typescript React Boilerplate application"
        />
      </Helmet>
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
      <GlobalStyle />
    </MainLayout>
  );
}
