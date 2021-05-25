import React from "react";
import icon from './memory.png';
import './logo.scss';

const Logo = () => {
  return (
    <div className = "header__logo">
      <img src={icon}  alt="icon"/>
    </div>
  )
};

export default Logo;