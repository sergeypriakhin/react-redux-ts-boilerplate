import * as React from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import Title from "@component/Title";

class Home extends React.Component {
  // Since state and props are static,
  // there's no need to re-render this component
  public shouldComponentUpdate() {
    return false;
  }

  public render() {
    return (
      <>
        <Helmet>
          <title>Home page</title>
        </Helmet>
        <Title>Boilerplate for React with Redux, TypeScript and routing.</Title>
      </>
    );
  }
}

export default connect(
  null,
  null
)(Home);
