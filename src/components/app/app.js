import React from "react";

import Logo from '../header/logo';
import MenuToggle from '../header/menu-toggle';
import HeaderTitle from '../header/header-title';
import ThemeSwitcher from '../header/theme-switcher';
import SignUp from '../header/sign-up';
import RunTest from '../run-test';

const App = () => {
  return (
    <div className="home-page">
      <header>
        <div className="menu-toggle">
          < Logo />
          < MenuToggle />
        < /div>
        < HeaderTitle />
        < ThemeSwitcher />
        < SignUp />
      < /header>
      <main>
        < RunTest/>
      < /main>
    < /div>
  )
};

export default App;