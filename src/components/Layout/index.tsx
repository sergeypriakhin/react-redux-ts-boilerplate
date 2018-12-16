import * as React from 'react';
import Header from '@component/Header';

interface Props {
  children: React.ReactNode;
}

export default function MainLayout(props: Props) {
  const { children } = props;
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}
