import React from "react";
import { useMyContext } from "../MyContext";

const CounterBoard = () => {
  const { guessArray, movieIndustry } = useMyContext();
  const hollywood = movieIndustry.toUpperCase().split("");

  console.log(guessArray);

  return (
    <div className="flex flex-col flex-wrap justify-center items-start font-semibold">
      <div className="flex flex-wrap justify-center items-center">
        {hollywood.map((item, index) => {
          return (
            <div
              key={index}
              className={`flex items-center justify-center text-2xl w-1/12 h-1/6 font-semibold p-2 ml-0.5 mb-0.5 ${
                index < guessArray.length ? "text-red-600" : ""
              }`}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {guessArray.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-center text-2xl w-1/12 h-1/6 font-semibold p-2 ml-1 mb-0.5"
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CounterBoard;
