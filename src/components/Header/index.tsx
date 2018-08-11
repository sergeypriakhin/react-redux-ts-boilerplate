import * as React from 'react';
import * as s from './Header.scss';

const Header = () => {
  return (
    <header className={s.wrap}>
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
