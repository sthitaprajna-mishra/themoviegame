import React from "react";

const CounterBoard = () => {
  const hollywood = "HOLLYWOOD".split("");

  return (
    <div className="flex flex-wrap justify-center items-center font-semibold border-2 border-blue-700">
      {hollywood.map((item, index) => {
        return (
          <div
            key={index}
            className="flex items-center justify-center text-2xl w-1/12 h-1/6 font-semibold p-2 ml-0.5 mb-0.5"
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default CounterBoard;
