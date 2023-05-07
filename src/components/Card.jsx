import React from "react";

const Card = (props) => {
  return (
    <div className="pb-8 dark:text-white">
      <div className="flex flex-row items-center mb-10 justify-between">
        <p className="italic font-bold text-2xl  relative mr-4">{props.partOfSpeech}</p>
        <div className="h-px bg-slate-300 w-full"></div>
      </div>

      <p className="mb-7 text-slate-500 ">Meaning</p>
      <ul className=" pl-10 list-disc">
        {props.definitions.map((item) => {
          return (
            <li className="mb-3 text-violet-600 text-sm md:text-lg">
              <span className="text-black dark:text-white">{item.definition}</span>
              {item.example && <p className=" mt-2 text-slate-500">&ldquo;{item.example}&rdquo;</p>}
            </li>
          );
        })}
      </ul>
      {props.synonyms.length > 0 && (
        <ul className="flex flex-wrap	 gap-8 mb-8">
          <div className="text-slate-500">Synonyms</div>
          {props.synonyms.map((item) => {
            return <li className="text-violet-600 font-bold">{item}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Card;
