import * as React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

export interface DashboardProps {}

class DashboardPage extends React.Component<DashboardProps> {
  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  public render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Dashboard</title>
        </Helmet>
        DashboardPage
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  null,
)(DashboardPage);
