import React from "react";

function Devicon({ link, text }) {
  return (
    <div className="m-2 p-2 w-20 md:w-40 relative">
      <img alt={text} width="150px" src={link} />
      <div className="sm:absolute left-0 right-0 top-0 bottom-0 opacity-50 sm:opacity-0 hover:opacity-50 w-full hover:cursor-pointer">
        <p className="sm:absolute left-1/4 top-3/4 right-1/4 text-center bg-slate-100 rounded-xl text-xs sm:text-sm">
          {text}
        </p>
      </div>
    </div>
  );
}

export default Devicon;
