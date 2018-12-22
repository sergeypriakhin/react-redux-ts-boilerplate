import * as React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import Title from '@component/Title';

export interface HomeProps {}

class Home extends React.Component<HomeProps> {
  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  public render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Home page</title>
        </Helmet>
        <Title>Boilerplate for React with Redux, TypeScript and routing.</Title>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  null
)(Home);
