import React from "react";
const fonts = ["-sans", "-serif", "-mono"];

const FontPicker = (props) => {
  const notActiveFonts = fonts.filter((font) => `font${font}` !== props.font);

  return (
    <div className="relative inline-block text-left">
      <div className="mr-4">
        <button onClick={props.fontWindowToggle} type="button" className="inline-flex w-full justify-center gap-x-1.5 border-none outline-none  px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:text-white dark:hover:bg-slate-800" id="menu-button" aria-expanded="true" aria-haspopup="true">
          {props.font === "font-sans" && "Sans Serif"}
          {props.font === "font-serif" && "Serif"}
          {props.font === "font-mono" && "Mono"}
          <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {props.fontWindow && (
        <div className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-800 `} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
          <div className="py-1" role="none">
            {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
            {notActiveFonts.map((item, index) => (
              <a onClick={props.onFontClick} href="#" className="text-black block px-4 py-2 text-sm dark:text-white" role="menuitem" tabIndex="-1" data-font={`font${item}`} id={`menu-item-${index}`}>
                {item === "-sans" && "Sans Serif"}
                {item === "-serif" && "Serif"}
                {item === "-mono" && "Mono"}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FontPicker;
