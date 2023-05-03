import React from "react";

const ErrorMsg = () => {
  return (
    <div className="flex flex-col justify-center text-center mt-32">
      <div className="text-4xl mb-11">🤨</div>
      <p className="font-bold mb-6">No Definitions Found</p>
      <p className="text-slate-500">Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
    </div>
  );
};

export default ErrorMsg;
