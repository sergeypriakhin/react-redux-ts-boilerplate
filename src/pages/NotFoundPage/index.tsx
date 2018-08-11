import * as React from 'react';
import { Helmet } from 'react-helmet';

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <h1>Page not found!!!</h1>
    </React.Fragment>
  );
};

export default NotFoundPage;
