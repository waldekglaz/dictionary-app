import React from "react";
import Logo from "./../assets/images/logo.svg";

const Header = (props) => {
  return (
    <header className="pb-12 flex justify-between dark:bg-black">
      <img className="w-8" src={Logo} aria-hidden="true" />
      <button onClick={props.onClick}>{props.theme ? "Light" : "Dark"}</button>
    </header>
  );
};

export default Header;
