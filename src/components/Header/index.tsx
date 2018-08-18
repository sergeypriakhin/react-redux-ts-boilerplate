import * as React from 'react';
import * as s from './Header.css';

const Header = () => {
  return (
    <header role="presentation" className={s.root}>
      <nav className={s.nav}>
        <a
          className={s.link}
          href="https://github.com/sergeypriakhin/react-redux-ts-boilerplate"
        >
          Source
        </a>
      </nav>
    </header>
  );
};

export default Header;
