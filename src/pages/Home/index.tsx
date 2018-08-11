import * as React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <h1>Home page!</h1>
    </React.Fragment>
  );
};

export default Home;
