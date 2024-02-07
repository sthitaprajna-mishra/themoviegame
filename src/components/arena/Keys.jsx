import React, { useState } from "react";
import { useMyContext } from "../MyContext";

// Generating an array of alphabets and digits
const alphaNumericValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");

const Keys = () => {
  const [choice, setChoice] = useState("");
  const {
    movieName,
    valueArray,
    setValueArray,
    truthArray,
    setTruthArray,
    chances,
    setChances,
  } = useMyContext();

  const handleUserGuess = (e) => {
    const userChoice = e.target.outerText;
    console.log(userChoice);

    if ("AEIOUaeiou".includes(userChoice)) return;

    // if valid choice, then reduce number of chances
    setChances(chances - 1);

    setChoice(userChoice);
    if (movieName.includes(userChoice)) {
      console.log("This letter is in the movie. Yay!");

      let indexI = -1,
        indexJ = -1;
      for (let i = 0; i < valueArray.length; i++) {
        for (let j = 0; j < valueArray[i].length; j++) {
          if (valueArray[i][j] == userChoice && !truthArray[i][j]) {
            indexI = i;
            indexJ = j;
            break;
          }
        }
      }

      const updatedTruthArray = [...truthArray];
      updatedTruthArray[indexI][indexJ] = true;
      setTruthArray(updatedTruthArray);
    }
  };

  return (
    <div className="flex flex-wrap justify-center items-center border-2 border-green-600">
      {alphaNumericValues.map((item, index) => {
        return (
          <div
            onClick={handleUserGuess}
            key={index}
            className="flex items-center justify-center w-1/12 h-1/6 font-semibold py-2 lg:p-4 ml-0.5 rounded text-center transition-all border border-gray-700 hover:cursor-pointer hover:bg-white hover:text-gray-700 bg-gray-700 text-white"
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Keys;
