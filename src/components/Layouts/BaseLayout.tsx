import * as React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { renderRoutes } from "react-router-config";
import Header from '@component/Header';
import GlobalStyle from '../../global-styles';

export default function BaseLayout(props: any) {
  return (
    <ThemeProvider theme={{ mode: 'light' }}>
      <>
        <Helmet defaultTitle="Typescript React Boilerplate">
          <meta
            name="description"
            content="A Typescript React Boilerplate application"
          />
        </Helmet>
        <Header />
        <main>{renderRoutes(props.route.routes)}</main>
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
}
