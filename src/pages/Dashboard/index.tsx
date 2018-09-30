import * as React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Row, Col, Card } from 'antd';

export interface DashboardProps {}

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 },
};

class Dashboard extends React.PureComponent<DashboardProps, any> {
  public render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Dashboard</title>
        </Helmet>
        <Row gutter={24}>
          <Col {...topColResponsiveProps}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col {...topColResponsiveProps}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col {...topColResponsiveProps}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col {...topColResponsiveProps}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  null,
)(Dashboard);
