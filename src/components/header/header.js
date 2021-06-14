import React from 'react';
import './header.scss';
import Icon from '../icon';
import Title from '../title';
import Button from '../button';

const Header = () => {
  return (
    <nav className="header">
      <div className="header__logo-wrapper">
        <Icon /></div>
        <Title tag="h1">Tec interiew helper</Title>
      <div className="header__right-wrapper">
          <Button onClick={() => {console.log("thema btn click!!!");}} className="btn-black">dark</Button>
          <Button onClick={() => {console.log("header button click!");}}> Join in </Button>
      </div>
    </nav>
  )
};

export default Header;