import * as React from 'react';
import * as s from './Link.css';

interface Props {
  title: string;
  link?: string;
}

const LinkA: React.SFC<Props> = ({ title, link }) => {
  return (
    <a className={s.root} href={link}>
      {title}
    </a>
  );
};

LinkA.defaultProps = {
  link: '#',
};

export default LinkA;
