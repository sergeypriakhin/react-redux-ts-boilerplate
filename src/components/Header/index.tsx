import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

interface HeaderProps {}

const Header: React.SFC<HeaderProps> = props => {
  return (
    <AppBar position="static">
      <Toolbar disableGutters={false}>Header</Toolbar>
    </AppBar>
  );
};

export default Header;
