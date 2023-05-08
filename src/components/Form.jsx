import React, { useContext } from "react";
import SearchIcon from "./../assets/images/icon-search.svg";
import { formContext } from "../App";

const Form = () => {
  const { onFormSubmit, userInput, setIsFontWindowOpen, onInputChange, isInputEmpty } = useContext(formContext);
  return (
    <form className="w-full relative" onSubmit={(e) => onFormSubmit(e)}>
      <input onClick={() => setIsFontWindowOpen(false)} className="bg-slate-100 w-full tex md:text-xl font-bold py-5 px-6 rounded-3xl dark:text-white dark:bg-slate-800" type="text" value={userInput} onChange={onInputChange} placeholder="Search for any word…" />
      <img className="absolute inset-y-1/3 right-8" src={SearchIcon} aria-hidden="true" />
      {isInputEmpty && <div className="text-red-500 text-xs">Whoops, can’t be empty…</div>}
    </form>
  );
};

export default Form;
