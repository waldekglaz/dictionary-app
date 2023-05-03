import React from "react";
import Logo from "./../assets/images/logo.svg";

const Header = () => {
  return (
    <header className="pb-12">
      <img className="w-8" src={Logo} aria-hidden="true" />
    </header>
  );
};

export default Header;
