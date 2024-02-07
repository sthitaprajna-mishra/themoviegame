import React, { useState } from "react";
import { useMyContext } from "../MyContext";

const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789".toUpperCase().split("");

const Keys = () => {
  // PLAY ARENA

  // console.log(alphabet);
  const [choice, setChoice] = useState("");

  // CONTEXT
  const { movieName, valueArray, setValueArray, truthArray, setTruthArray } =
    useMyContext();
  // console.log(movieName);

  // HANDLE USER GUESS
  const handleUserGuess = (e) => {
    const userChoice = e.target.outerText;
    console.log(userChoice);

    if ("AEIOUaeiou".includes(userChoice)) return;

    setChoice(userChoice);
    if (movieName.includes(userChoice)) {
      console.log("This letter is in the movie. Yay!");

      // if this letter is not displayed yet

      // find index
      let indexI = -1,
        indexJ = -1;
      for (let i = 0; i < valueArray.length; i++) {
        for (let j = 0; j < valueArray[i].length; j++) {
          if (valueArray[i][j] == userChoice) {
            indexI = i;
            indexJ = j;
            break;
          }
        }
      }

      // display letter
      const updatedTruthArray = [...truthArray];
      updatedTruthArray[indexI][indexJ] = true;
      setTruthArray(updatedTruthArray);
    }
  };

  return (
    <>
      <div className="flex justify-center my-2 mx-auto gap-2 lg:w-1/2 flex-wrap border border-orange-500">
        {alphabet.map((item, index) => {
          return (
            <div
              onClick={handleUserGuess}
              key={index}
              className="font-semibold py-2 px-2 w-[3rem] rounded text-center transition-all border border-gray-700 hover:cursor-pointer hover:bg-white hover:text-gray-700 bg-gray-700 text-white"
            >
              {item}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Keys;
