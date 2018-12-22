import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
// import theme from 'styled-theming';

import Home from '@page/Home';
import MainLayout from '@component/Layout';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <ThemeProvider theme={{ mode: 'light' }}>
      <MainLayout>
        <Helmet defaultTitle="Typescript React Boilerplate">
          <meta
            name="description"
            content="A Typescript React Boilerplate application"
          />
        </Helmet>
        <Switch>
          <Route exact={true} path="/" component={Home} />
        </Switch>
        <GlobalStyle />
      </MainLayout>
    </ThemeProvider>
  );
}
