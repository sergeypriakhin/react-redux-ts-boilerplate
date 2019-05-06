import * as React from 'react';
import Header from '@component/Header';

interface Props {
  children: React.ReactNode;
}

export default function BaseLayout(props: Props) {
  const { children } = props;
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
    </React.Fragment>
  );
}
