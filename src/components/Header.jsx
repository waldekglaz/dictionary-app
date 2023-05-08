import React, { useContext } from "react";
import FontPicker from "./FontPicker";
import Logo from "./../assets/images/logo.svg";
import Moon from "./../assets/images/icon-moon.svg";
import { themeContext } from "../App";

const Header = () => {
  const { themeChangeHandler, darkToggle } = useContext(themeContext);

  return (
    <header className="pb-12 flex justify-between dark:bg-black">
      <img className="w-8" src={Logo} aria-hidden="true" />
      <div className="flex items-center">
        <FontPicker />
        <label className="inline-flex relative items-center mr-5 cursor-pointer">
          <input type="checkbox" className="sr-only peer" checked={darkToggle} readOnly />
          <div onClick={themeChangeHandler} className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-800"></div>
          <span className="ml-2 text-sm font-medium text-gray-900">
            <img src={Moon} aria-hidden="true" />
          </span>
        </label>
      </div>
    </header>
  );
};

export default Header;
