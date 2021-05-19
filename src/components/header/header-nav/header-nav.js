import React from "react";
import { Toolbar } from "react-onsenui"
import Logo from "../logo/logo";
import SignUp from "../sign-up";
const HeaderNav = () => {
  return (
      <Toolbar>
        <div className="left">
          < Logo />
        </div>
        <div className="center">
          Tec interview helper
        </div>
        <div className="right">
          < SignUp />
        </div>
      </Toolbar>
  )
};

export default HeaderNav;