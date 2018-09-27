import * as React from 'react';
import { Helmet } from 'react-helmet';
import * as s from './Home.css';
import LinkA from '../../components/Link';

const Home = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <section className={s.root}>
        <div>
          <h1 className={s.header1}>
            Quick setup for new performance orientated, offline–first React.js
            applications
          </h1>
          <LinkA
            link="https://github.com/sergeypriakhin/react-redux-ts-boilerplate"
            title="Source"
          />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
