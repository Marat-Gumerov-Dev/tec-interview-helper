import React from "react";

const Logo = () => {
  const logoStyle = {
     width: "32px",
     height: "32px"
  }

  return (
    <a href="/some/valid/uri">
      <img
       src="logo"
       style={logoStyle}
       alt="logo" />
    < /a>
  )
};

export default Logo;