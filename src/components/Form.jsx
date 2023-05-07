import React from "react";
import SearchIcon from "./../assets/images/icon-search.svg";

const Form = (props) => {
  return (
    <form className="w-full relative" onSubmit={(e) => props.onFormSubmit(e)}>
      <input onClick={() => props.fontWindowOpen(false)} className="bg-slate-100 w-full tex md:text-xl font-bold py-5 px-6 rounded-3xl dark:text-white dark:bg-slate-800" type="text" value={props.input} onChange={props.onInputChange} placeholder="Search for any word…" />
      <img className="absolute inset-y-1/3 right-8" src={SearchIcon} aria-hidden="true" />
      {props.isInputEmpty && <div className="text-red-500 text-xs">Whoops, can’t be empty…</div>}
    </form>
  );
};

export default Form;
