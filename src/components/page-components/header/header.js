import React from 'react';

import './header.scss';
import Logo from '../logo';
import Title from '../title';
import SwitchTheme from '../switch-theme';
import Button from '../button';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-wrapper" >
        < Logo />
      </div>
      <Title />
      <div className="header__right-wrapper">
        <div>
          <SwitchTheme />
        </div>
        <div>
          <Button />
        </div>
      </div>
      
    </header>
  )
};

export default Header;