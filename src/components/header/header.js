import React from 'react';
import './header.scss';
import Logo from '../logo';
import Title from '../title';
import Button from '../button';

const Header = () => {
  return (
    <nav className="header">
      <div className="header__logo-wrapper" >
        < Logo />
      </div>
      <Title />
      <div className="header__right-wrapper">
        <div>
          <Button onClick={() => {console.log("thema btn click!!!");}} className="btn-black">dark</Button>
        </div>
        <div>
          <Button onClick={() => {console.log("header button click!");}}> Joun in </Button>
        </div>
      </div>
    </nav>
  )
};

export default Header;