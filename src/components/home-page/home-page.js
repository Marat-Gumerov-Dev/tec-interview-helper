import React from "react";

import HeaderNav from "../header/header-nav";
import Logo from '../header/logo';
import MenuToggle from '../header/menu-toggle';
import ThemeSwitcher from '../header/theme-switcher';
import RunTest from '../run-test';



const HomePage = () => {

  return (
    <div className="home-page">
      <header>
        < HeaderNav />
        <div>
          < Logo />
          < MenuToggle />
        </div>
        < ThemeSwitcher />
      </header>
      <main>
        < RunTest/>
      </main>
    </div>
  )

}

export default HomePage;